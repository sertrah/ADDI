import { fetchJSON } from "infraestructure/helpers";
import { authService } from "infraestructure/services";

const API_URL = `${process.env.REACT_APP_DOMAIN}`;

function call(
  path: string,
  options: { headers?: any; method?: string; body?: any } = {}
) {
  const url = `${API_URL}/${path}`;
  const token = authService.getToken();

  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return fetchJSON(url, options).catch((error: any) => {
    if (error.status === 401) {
      authService.logout();
    }
    return Promise.reject(error);
  });
}

const get = (path: string) => {
  return call(path, { method: "GET" });
};

const post = (path: string, body: any) => {
  return call(path, { method: "POST", body });
};

function put(path: string, body: any) {
  return call(path, { method: "PUT", body });
}

export const api = { call, get, post, put };
