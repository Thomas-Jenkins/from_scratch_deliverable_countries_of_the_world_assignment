import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/fetch-utils';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (a) {
        console.log(a);
        setError(a.message);
      }
    }
    fetchData();
  }, []);
  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((countries) => countries.continent === continent);
  };
  
  return { filterCountries, continent, setContinent, error };
}
