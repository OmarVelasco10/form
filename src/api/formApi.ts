import axios from 'axios';

export const formApi = axios.create({
  baseURL: "http://localhost:4000",
});