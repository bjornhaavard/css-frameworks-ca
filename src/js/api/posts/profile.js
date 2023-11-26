import { getName } from "../../helpers/getName.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

const action = "/profiles";

export async function getProfile() {
  const profile = await getName();

  const response = await fetchWithToken(`${API_SOCIAL_URL}${action}/${profile}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
