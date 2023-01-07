import axios from 'axios';

const BASE_URL = 'https://api.thedogapi.com/v1/breeds';
const API_KEY =
  'live_RhKsggqeaM43aTur31eeAV85R9vyl4UIV7ogayx7INLdiXJ9El14ifJz42mzk9ka';

export const fetchDogs = async page => {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&limit=12&page=${page}`
  );
  return response.data;
};

export const fetchBreeds = async () => {
  const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
  return response.data;
};
