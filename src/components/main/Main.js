import React from 'react';

import { useCountries } from '../../Hooks/useData';

import CountryCards from '../CountryCards/CountryCards';


export default function Main() {
  const { filterCountries, continent, setContinent, error } = useCountries();
  return (
    <main className="App">
      {error ? <p>{error}</p> :
        <><div className="title">
          <h1>Flags of the World</h1>
        </div><div className="navigation">
          <input placeholder="Lol this doesn't do anything "></input>
          <select value={continent} onChange={(e) => {
            setContinent(e.target.value);
          }}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="North America">North america</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South america</option>
          </select>
        </div><div className="list">
          {filterCountries().map(countries => <CountryCards key={countries.id} {...countries} />)}

        </div></>
      }
    </main>
  );
}