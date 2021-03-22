import axios from 'axios';

export const getMovies = async (page) => {
  try {
    const moviesRes = await axios.get(
      `https://api.unsplash.com/search/photos?query=bears&page=${page}&client_id=9uWAntK0z3dgFzlJZ6XLglwR3LNLMnWhggmEX_sSSQs`,
    );
    return [null, moviesRes.data.results];
  } catch (error) {
    return [error];
  }
};
