import axios from "axios";
import { SandwichUser } from "../context/reducer";

const URL = "http://localhost:3000/api/v1/order";

export const fetchOrders = async (token: string) => {
  return axios
    .get(URL, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);
};

export const makeOrder = async (payload: SandwichUser[], token: string) => {
  return axios
    .post(
      URL,
      {
        items: payload,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => res.data);
};
