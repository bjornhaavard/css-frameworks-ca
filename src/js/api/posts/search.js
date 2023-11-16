import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function searchPosts(tag) {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_tag=${tag}&_active=true&_author=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
