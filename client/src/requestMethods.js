import axios from "axios";

const BASE_URL = "https://social-media-mern-applications.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
