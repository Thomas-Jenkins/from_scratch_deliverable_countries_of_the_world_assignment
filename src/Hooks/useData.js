import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/fetch-utils';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

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
  return { countries, error };
}
