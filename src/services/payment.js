import { paymentAuth, paymentNetWork } from "../config/network";
import { paymentConfig } from "../config/reloadlyConfig";
import { getPaymentToken } from "../helpers/paymentToken";
function setHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
export async function paymentToken() {
  try {
    const response = await paymentNetWork.post("/oauth/token", paymentConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function accountBalance() {
  try {
    const token = await getPaymentToken();
    const response = await paymentAuth.get(
      "/accounts/balance",
      setHeader(token)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCountry() {
  try {
    const token = await getPaymentToken();
    const response = await paymentAuth.get("/countries", setHeader(token));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCountryById(countrycode) {
  try {
    const token = await getPaymentToken();
    const response = await paymentAuth.get(
      `/countries/${countrycode}`,
      setHeader(token)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOperatorByCountryCodePhone(phone, countrycode) {
  try {
    const token = await getPaymentToken();
    const response = await paymentAuth.get(
      `operators/auto-detect/phone/${phone}/countries/${countrycode}`,
      setHeader(token)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function sentPaymentTopUp(data) {
  try {
    const token = await getPaymentToken();
    const response = await paymentAuth.post(`/topups`, data, setHeader(token));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
