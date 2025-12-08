import axios from "axios";

export const fetchDict = async () => {
  return axios(`${import.meta.env.BASE_URL}dict.json`);
};
