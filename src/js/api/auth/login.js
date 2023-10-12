import { API_SOCIAL_URL } from "../constants.js";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  try {
    const loginURL = API_SOCIAL_URL + action;

    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
