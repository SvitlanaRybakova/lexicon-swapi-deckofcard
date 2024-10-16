import axios from 'axios';

export const getPeople = async (page = null, query = null) => {
  const response = await axios.get(`https://swapi.dev/api/people/?search=${query}&page=${page}`);
  return response.data;
};
