import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function searchPosts() {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_tag=my_tag&_active=true`);
  console.log(response);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
