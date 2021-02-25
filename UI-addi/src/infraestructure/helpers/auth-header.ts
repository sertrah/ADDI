import { authService } from "infraestructure/services";

export function authHeader() {
  const token = authService.getToken();
  if (token) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
  } else {
    return {};
  }
}
