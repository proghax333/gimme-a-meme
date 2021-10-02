import React from "react";
import { List } from "react-content-loader";

function DadJoke({ numberOfJokes = 1, ...props }) {
  const [jokes, setJokes] = React.useState([]);
  React.useEffect(() => {
    setJokes([]);
    async function loadJokes() {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setJokes([data]);
    }
    loadJokes();
  }, [numberOfJokes]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      {jokes.length > 0 ? (
        jokes.map((joke, index) => {
          return (
            <div key={`joke_${index}`} className="text-center">
              {joke.joke}
            </div>
          );
        })
      ) : (
        <List viewBox="0 0 100%" className="m-4" />
      )}
    </div>
  );
}

export default DadJoke;
