const API_KEY = '44hpXP9iRL8WOSsNUvt8xSVJ9L5orWWP';

export const getGifs = async (text) => {
  const searchTerm = encodeURIComponent(text);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50`;

  const response = await fetch(url);
  const data = await response.json();

  return data.data;
};

export const getRandomFact = async () => {
  const url = 'https://catfact.ninja/fact?max_length=50';

  const response = await fetch(url);
  const data = await response.json();

  return data.fact;
};
