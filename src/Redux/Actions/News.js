import Axios from "axios";

const URL_STRING = "https://newsapi.org/v2/";

export const getNews = (config) => {
  return {
    type: "GET_NEWS",
    payload: Axios.get(URL_STRING,config)
  };
};
