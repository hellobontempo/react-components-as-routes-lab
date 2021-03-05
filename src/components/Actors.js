import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(actor => {
          return (
            <React.Fragment>
            <div key={actor.name} className="actor">{actor.name}
              <ul key={actor.name}>{actor.movies.map(movie => {
                    return (
                    <li key={movie}>{movie}</li>
                    )
                })}
               </ul>
            </div>
            </React.Fragment>
          )
        })}
    </div>
  );
};

export default Actors;
