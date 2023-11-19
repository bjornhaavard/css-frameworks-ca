import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function sortPosts(sortParam, sortOrderParam) {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?sort=${sortParam}&sortOrder=${sortOrderParam}&_active=true&_author=true`);
  const posts = response.json();

  if (response.ok) {
    return posts;
  }

  throw new Error(response.statusText);
}
