import axios from "axios";
import { withoutAuth } from "../config/network";

// create user method post request with axios
export const createUser = async (user) => {
  console.log(JSON.stringify(user));
  try {
    const response = await withoutAuth.post("/authentication/signup", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (user) => {
  console.log("loginUser" + JSON.stringify(user));
  try {
    const response = await withoutAuth.post("/authentication/signin", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
