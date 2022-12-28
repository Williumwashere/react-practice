import React from "react";

interface WordAppObj {
  word: string;
  definition: string;
}

export default function DictApp() {
  const [data, setData] = React.useState<WordAppObj[]>([]);
  const [word, setWord] = React.useState<string>("default");

  const newWord = (wordInput: string) => {
    const result = (value: Response) => {
      return value.json();
    };
    const jsonData = (value: WordAppObj[]) => {
      setData(value);
    };
    return fetch(`https://api.api-ninjas.com/v1/dictionary?word=${wordInput}`, {
      headers: { "X-Api-Key": "lZOkNRcxcRbTIitJ2BjLKw==7ukbxScp64NxhMke" },
    })
      .then(result)
      .then(jsonData);
  };

  React.useEffect(() => {
    newWord(word);
    setWord(word);
  }, [word]);

  return (
    <div>
      <h2>{data[0]?.word || "Loading"}</h2>
      <form>
        <label htmlFor="wordsearch"></label>
      </form>
    </div>
  );
}
