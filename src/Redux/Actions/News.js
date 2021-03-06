import Axios from "axios";

const URL_STRING = "https://newsapi.org/v2";

export const getNews = (url, config) => {
  return {
    type: "GET_NEWS",
    payload: Axios.get(URL_STRING + url, config)
  };
};
