import { API_SOCIAL_BASE } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

export async function getProfileData(profile) {
  const response = await fetchWithToken(`${API_SOCIAL_BASE}/${profile}`);
  const posts = response.json();
  console.log(posts);
  if (response.ok) {
    return posts;
  }

  throw new Error(response.statusText);
}
console.log("hrllo");
