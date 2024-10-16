import axios from 'axios';

axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck/new';

export const drawCard = async () => {
  const response = await axios.get(`/draw/?count=1`);

  return response.data;
};
