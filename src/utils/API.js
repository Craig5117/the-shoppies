export const searchOMDB = (query) => {
  return fetch(`https://www.omdbapi.com/?apikey=1149e0e0&s=${query}&r=json`);
};
