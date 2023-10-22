import { displayMessage } from "../../components/shared/displayMessage.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error(displayMessage("#message", error.message, "warning"));
  }

  const createPostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await fetchWithToken(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
