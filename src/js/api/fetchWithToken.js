import { load } from "../storage/index.js";

export function headers() {
  const token = load("token");

  if (!token) {
    throw new Error("No token, pal");
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
