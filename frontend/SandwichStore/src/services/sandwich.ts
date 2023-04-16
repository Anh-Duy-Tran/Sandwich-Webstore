import axios from "axios";

const URL = "http://localhost:3000/api/v1/sandwich";

export const fetchSandwich = async () => {
  return axios.get(URL).then(res => res.data);
}
