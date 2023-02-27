import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '6103831f26msh60015a037f6c985p173e08jsn4f4bb4417097',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
};
