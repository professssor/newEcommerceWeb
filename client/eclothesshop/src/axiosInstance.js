import axios from "axios";
const apikey =
  "d952ff1e88f14a6ba8a7bafca861567b0aaf13d8b2f907dfdf7a12c33af02896022474a90884de0c56ad27c26de3ca9777677ceb92a7a61b36238815445ea657231421b5e5e150db13efc298af6e8e4f1294ffbe70a0638494fc35dafa0a8a714397244524f95fc94cbe30e24bf248ba164c10002f9a60cd223c447e20e7fde7";
const apiURL = "http://localhost:1337/api";

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: "bearer" + apikey,
  },
});
