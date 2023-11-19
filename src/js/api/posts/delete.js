import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("delete requires a id");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await fetchWithToken(updatePostURL, {
    method,
  });

  return await response.json();
}
