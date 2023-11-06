import { renderPosts } from "../../components/posts/renderPosts.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";

export async function getPosts() {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_reactions=true&_author=true&_comments=true`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}?_author=true`;

  const response = await fetchWithToken(getPostUrl);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
