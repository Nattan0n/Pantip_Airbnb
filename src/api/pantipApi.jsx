// pantipApi.jsx

import axios from 'axios';

const getPopularThreads = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/popular-threads');
    return response.data;
  } catch (error) {
    console.error('Error fetching popular threads:', error);
    throw error;
  }
};

export { getPopularThreads };
