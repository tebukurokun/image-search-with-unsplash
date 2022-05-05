import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Results } from "./components/Results";
import { Title } from "./components/Title";
import { PhotoData } from "./interfaces/PhotoData";
import { searchPhotos } from "./lib/SearchPhotos";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [word, setWord] = useState<string>("");
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);

  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  const isActive = !!word;

  const executeSearch: (
    word: string,
    page: number
  ) => Promise<PhotoData[]> = async (word: string, page: number) => {
    const response = await searchPhotos(word, page);

    if (!response) {
      setHasMore(false);
      return [];
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

    console.info(photoData);

    return photoData;
  };

  const initSearch = async () => {
    setPage(1);
    const photoData = await executeSearch(word, 1);
    setPhotos(photoData);
    setHasMore(true);
  };

  const loadMore = async () => {
    setPage(page + 1);
    const photoData = await executeSearch(word, page + 1);
    if (photoData.length === 0 || page > 10) {
      setHasMore(false);
    }
    setPhotos([...photos, ...photoData]);
  };

  return (
    <div className="App bg-slate-900 text-white">
      <header className="App-header"></header>
      <Title />
      <Form setWord={setWord} executeSearch={initSearch} isActive={isActive} />
      <InfiniteScroll
        next={loadMore}
        hasMore={hasMore}
        loader={loader}
        dataLength={photos.length}
      >
        <Results photos={photos} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
