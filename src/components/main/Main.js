import React from 'react';

import { useCountries } from '../../Hooks/useData';

import CountryCards from '../CountryCards/CountryCards';


export default function Main() {
  const { countries, error } = useCountries();
  return (
    <main className="App">
      {error ? <p>{error}</p> :
        <><div className="title">
          <h1>Flags of the World</h1>
        </div><div className="navigation">
          <input placeholder="Lol this doesn't do anything "></input>
          <select>
            <option>All</option>
            <option>None</option>
          </select>
        </div><div className="list">
          {countries.map(countries => <CountryCards key={countries.id} {...countries} />)}

        </div></>
      }
    </main>
  );
}