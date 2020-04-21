import React from "react";

export const GamesList = (props) => {
  const { gameList } = props
  return (
    <div className="games-list">
      {
      gameList.map((user, i) => {
            const {
              title,
              url,
              platform,
              score,
              genre,
              editors_choice,
              release_year
             } = user;
            return (
              <div key={i} className="card">
                  <p className="score">{score}</p>
                   <p className="year">{release_year}</p>
                 <div>
                  <img src={`https://robohash.org/san` +genre } alt={genre} />
                </div>
              <p  className="title">{title}</p>
                <p className="platform">{platform}</p>
                <a href={url}>View Game</a>
                { editors_choice ? (<i className="fa fa-star" aria-hidden="true"></i>): '' }
               
              </div>
            );
          })
          }
    </div>
  );
};


// title: "LittleBigPlanet PS Vita",
//   url: "/games/littlebigplanet-vita/vita-98907",
//   platform: "PlayStation Vita",
//   score: 9,
//   genre: "Platformer",
//   editors_choice: "Y",
//   release_year: 2012
// },