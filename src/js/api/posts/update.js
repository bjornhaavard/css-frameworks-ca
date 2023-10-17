import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  const createPostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
  
  const response = await fetchWithToken(createPostURL, {
    method,
    body: JSON.stringify(postData),
  })

  return await response.json();

}
