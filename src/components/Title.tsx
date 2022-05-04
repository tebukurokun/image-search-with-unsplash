import { H1 } from "@blueprintjs/core";

const Title = () => {
  return (
    <header>
      <H1 className={"pt-2 text-white"}>Image Search App</H1>
      <p>
        By{" "}
        <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </p>
    </header>
  );
};

export { Title };
