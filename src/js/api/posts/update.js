import { displayMessage } from "../../components/shared/displayMessage.js";
import { API_SOCIAL_URL } from "../constants.js";
import { fetchWithToken } from "../fetchWithToken.js";

/**
 * Updates a post with the provided data.
 *
 * @async
 * @function
 * @param {Object} postData - The data to update the post with.
 * @param {string} postData.id - The ID of the post to be updated.
 * @param {string} postData.title - The updated title of the post.
 * @param {string} postData.body - The updated body of the post.
 * @returns {Promise<Object>} A Promise that resolves with the updated post data.
 * @throws {Error} If there is an issue updating the post or the response is not OK,
 * an error message is displayed, and the error is thrown.
 */

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error(displayMessage("#message", error.message, "warning"));
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  /**
   * Fetches data from the specified API endpoint with an authentication token.
   *
   * @function
   * @param {string} url - The URL of the API endpoint.
   * @param {Object} options - Additional options for the fetch request.
   * @returns {Promise <Response>} A Promise that resolves with the response from the API.
   */

  const response = await fetchWithToken(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    // Catch and rethrow any errors that occur during the process
    throw new Error(displayMessage("#message", error.message, "warning"));
  }

  return await response.json();
}
