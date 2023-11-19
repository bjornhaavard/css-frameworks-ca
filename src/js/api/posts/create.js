import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await fetchWithToken(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error(result.errors[0].message);
}
