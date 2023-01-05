import axios from "axios";

const baseurl = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL: baseurl,
});
