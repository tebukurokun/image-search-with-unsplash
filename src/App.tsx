import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { Title } from "./components/Title";
import { PhotoData } from "./interfaces/PhotoData";
import { searchPhotos } from "./lib/SearchPhotos";

function App() {
  const [word, setWord] = useState<string>("");
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  const executeSearch = async () => {
    const response = await searchPhotos(word);
    if (!response) {
      return;
    }
    console.debug(response.data);

    const photoData = response.data.results.map((result) => {
      return {
        id: result.id,
        description: result.alt_description,
        urls: {
          regular: result.urls.regular,
        },
        links: {
          html: result.links.html,
        },
      } as PhotoData;
    });

    setPhotos(photoData);

    console.info(photoData);
  };

  return (
    <div className="App bg-slate-900 text-white">
      <header className="App-header"></header>
      <Title />
      <Form setWord={setWord} executeSearch={executeSearch} />
      <Results photos={photos} />
    </div>
  );
}

export default App;
