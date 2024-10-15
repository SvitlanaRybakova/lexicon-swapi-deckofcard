import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api';

const get = async (endpoint) => {
  const response = await axios.get(endpoint);

  return response.data.results;
};

export const getPeople = async (page = null, query = null) => {
  if (page === null && query === null) return get('/people/');

  return get(`/people/?search=${query}&page=${page}`);
};
