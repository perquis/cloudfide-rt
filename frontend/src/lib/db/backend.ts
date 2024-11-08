import axios from "axios";

export const backend = axios.create({
  baseURL: "/api/v3",
});
