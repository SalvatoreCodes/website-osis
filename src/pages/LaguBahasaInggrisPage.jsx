import React from "react";

import { laguData } from "../laguData";

function LaguBahasaInggrisPage() {
  const [query, setQuery] = React.useState("");
  const lowerCased = query.toLowerCase();

  return (
    <div className="lagu-bahasa-inggris-page">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="lagu-container">
        {laguData
          .filter((data) => data.title.toLowerCase().includes(lowerCased))
          .map((data) => (
            <div key={data.id} className="song">
              <h1>{data.title}</h1>
              <p>{data.author}</p>
              <h4 className="song-lyric">{data.song}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LaguBahasaInggrisPage;
