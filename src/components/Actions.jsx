import React from "react";
const API_BASE_URL = "https://meme-api.herokuapp.com";
import { Instagram } from "react-content-loader";

function MemeView({ meme, ...props }) {
  return (
    <div className="w-full">
      <img
        src={meme.url}
        style={{
          width: "100%",
        }}
        className="shadow-md"
      />
      <hr className="my-2" />
      <p className="font-mono text-xs font-bold">
        Title: <span className="font-normal">{meme.title}</span>
      </p>
      <p className="font-mono text-xs font-bold">
        Post Link:{" "}
        <a className="font-normal text-underline" href={meme.postLink}>
          {meme.postLink}
        </a>
      </p>
      <p className="font-mono text-xs font-bold">
        Subreddit:{" "}
        <a
          className="font-normal text-underline"
          href={`https://www.reddit.com/r/${meme.subreddit}`}
        >
          r/{meme.subreddit}
        </a>
      </p>
    </div>
  );
}

function Actions() {
  const [meme, setMeme] = React.useState(null);
  async function loadMeme() {
    setMeme(null);
    const response = await fetch(`${API_BASE_URL}/gimme`);
    const meme = await response.json();
    setMeme(meme);
  }

  React.useEffect(() => {
    loadMeme();
  }, []);

  return (
    <div className="flex-grow flex flex-col">
      <div className="w-full flex flex-col items-center h-full">
        {meme ? <MemeView meme={meme} /> : <Instagram />}
        <div
          className="w-full p-2 my-1"
          style={{
            marginTop: "auto",
          }}
        >
          <button
            onClick={loadMeme}
            className="border w-full rounded-full py-1 bg-green-500 text-white text-sm shadow-md
            transition-all hover:bg-green-600"
          >
            Get Meme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actions;
