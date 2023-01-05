import axios from "axios";

const baseurl = " http://localhost:3000";

export const api = axios.create({
  baseURL: baseurl,
});
