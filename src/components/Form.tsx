const Form = ({
  setWord,
  executeSearch,
}: {
  setWord: (word: string) => void;
  executeSearch: () => void;
}) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="keyword"
          placeholder="e.g. cat"
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="button" onClick={() => executeSearch()}>
          Search
        </button>
      </form>
    </div>
  );
};

export { Form };
