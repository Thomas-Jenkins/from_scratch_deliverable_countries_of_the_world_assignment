import { client } from './client';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  
  return checkError(response);
}

function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
