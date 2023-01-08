import axios from 'axios';

const BASE_URL = 'https://api.thedogapi.com/v1/';
const API_KEY =
  'live_RhKsggqeaM43aTur31eeAV85R9vyl4UIV7ogayx7INLdiXJ9El14ifJz42mzk9ka';

export const getDogs = async page => {
  const response = await axios.get(
    `${BASE_URL}breeds?api_key=${API_KEY}&limit=12&page=${page}`
  );
  return response.data;
};

export const getBreeds = async () => {
  const response = await axios.get(`${BASE_URL}breeds?api_key=${API_KEY}`);
  return response.data;
};

export const getBreedsById = async id => {
  const response = await axios.get(
    `${BASE_URL}images/search?breed_ids=${id}&api_key=${API_KEY}`
  );
  return response.data;
};

export const getInfoById = async id => {
  const response = await axios.get(
    `${BASE_URL}breeds/${id}?api_key=${API_KEY}`
  );
  return response.data;
};
