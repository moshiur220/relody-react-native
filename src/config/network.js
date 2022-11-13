// Import axios
import axios from "axios";
import { getPaymentToken } from "../helpers/paymentToken";
import { API_URL } from "./apiUrl";
// axios config
// axios.defaults.baseURL = API_URL;
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// // Export axios
// export default axios;
//  axios instance for making requests to the API server JWT token
export const network = axios.create({
  baseURL: API_URL,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
export const withoutAuth = axios.create({
  baseURL: API_URL,
});
export const paymentNetWork = axios.create({
  baseURL: "https://auth.reloadly.com",
});
export const paymentAuth = axios.create({
  baseURL: "https://topups-sandbox.reloadly.com",
  // headers: {
  //   Authorization: `Bearer ${getPaymentToken().then((res) => res)}`,
  // },
});
