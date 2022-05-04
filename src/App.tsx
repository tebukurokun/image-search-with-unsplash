import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { Title } from "./components/Title";
import { searchPhotos } from "./lib/SearchPhotos";

function App() {
  const [word, setWord] = useState<string>("");
  const [photo, setPhoto] = useState([]);

  const executeSearch = async () => {
    const result = await searchPhotos(word);
    console.info(result.data);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Title />
      <Form setWord={setWord} executeSearch={executeSearch} />
      <Results />
    </div>
  );
}

export default App;
