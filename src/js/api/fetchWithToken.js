import { displayMessage } from "../components/shared/displayMessage.js";
import { load } from "../storage/index.js";

export function headers() {
  const token = load("token");

  if (!token) {
    throw new Error("No token, pal");
    // displayMessage("#error-message", 'No token, go to <a href="/">Login page</a>', "danger");
  }

  return {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
