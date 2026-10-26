import axios from "axios";
import { getApiOrigin } from "@/lib/api-origin";

const api = axios.create({
  baseURL: `${getApiOrigin()}/api`,
  timeout: 15_000,
  headers: { Accept: "application/json" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(config.url ?? "")) {
    throw new Error("API requests must use a relative URL.");
  }

  config.withCredentials = true;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      typeof window !== "undefined" &&
      window.location.pathname !== "/"
    ) {
      window.location.assign(new URL("/", window.location.origin).toString());
    }

    return Promise.reject(error);
  },
);

export { api };
