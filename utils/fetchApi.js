import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "https://bayut.p.rapidapi.com",
      "x-rapidapi-key": "https://bayut.p.rapidapi.com",
    },
  });

  return data;
};
