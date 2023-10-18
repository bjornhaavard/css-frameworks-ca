import { load } from "../storage/index.js";

export function headers() {
  const token = load("token");

  return {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchWithToken(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
