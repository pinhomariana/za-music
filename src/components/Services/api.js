import axios from 'axios';

const API_CHART_URL = '/chart';
const API_GENRES_URL = '/genre';

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
