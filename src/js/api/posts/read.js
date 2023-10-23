import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function getPosts() {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_reactions=true&_author=true&_comments=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  if (id) {
    throw new Error("Get requires a postID");
  }

  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await fetchWithToken(getPostUrl);

  return await response.json();
}