import { Button, InputGroup } from "@blueprintjs/core";

const Form = ({
  setWord,
  executeSearch,
  isActive,
}: {
  setWord: (word: string) => void;
  executeSearch: () => void;
  isActive: boolean;
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 mt-2 mb-4">
      <InputGroup
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        onChange={(e) => setWord(e.target.value)}
        className={"col-start-2 col-end-5"}
        large
        round
      />
      <Button
        type="button"
        intent="success"
        className="rounded"
        onClick={() => executeSearch()}
        disabled={!isActive}
      >
        Search
      </Button>
    </div>
  );
};

export { Form };
