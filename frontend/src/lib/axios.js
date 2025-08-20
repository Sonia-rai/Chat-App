import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "developemnt" ? "http://localhost:5001/api" : "/api",
  withCredentials:true,//This is to allow cookies to be sent with requests- everytime
});