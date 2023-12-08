import { displayMessage } from "../../components/shared/displayMessage.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";

export async function getPosts() {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_reactions=true&_author=true&_comments=true&limit=70`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
    displayMessage("#post-container", "Get requires a postID", "danger");
  }

  const getPostUrl = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;

  const response = await fetchWithToken(getPostUrl);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
