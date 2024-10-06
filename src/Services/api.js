import axios from 'axios';

const API_CHART_URL = '/chart';
const API_GENRES_URL = '/genre';
const API_SEARCH_URL = '/search';
const API_RADIO_URL = '/radio/37151/tracks';

export const loadRadio = async () => {
  try {
    const response = await axios(API_RADIO_URL);
    if (!response.data.data) throw Error();
    return response.data.data;
  } catch (err) {
    throw Error('Failed to load Radio!');
  }
};

export const loadCharts = async () => {
  try {
    const response = await axios(API_CHART_URL);
    if (!response.data) throw Error();
    return response.data;
  } catch (err) {
    throw Error('Failed to load chart!');
  }
};

export const loadGenres = async () => {
  try {
    const response = await axios(API_GENRES_URL);
    if (!response.data.data) throw Error();
    return response.data.data.filter((genre) => genre.name.toLowerCase() !== 'all');
  } catch (err) {
    throw Error('Failed to load genres!');
  }
};

export const search = async (searchQuery) => {
  try {
    const response = await axios(`${API_SEARCH_URL}?q=${searchQuery}`);
    if (!response.data.data) throw Error();
    return response.data.data;
  } catch (err) {
    throw Error('Failed to load tracks!');
  }
};
