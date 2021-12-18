import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "https://bayut.p.rapidapi.com",
      "x-rapidapi-key": "3cbee54d58mshf432ebc967d3657p11b488jsnaa325d772d50",
    },
  });

  return data;
};
