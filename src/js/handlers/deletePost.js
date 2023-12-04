import { removePost } from "../api/posts/delete.js";
import { displayMessage } from "../components/shared/displayMessage.js";

/**
 * Deletes a post by calling the removePost API function and displays a success message.
 * If an error occurs, it logs the error to the console.
 *
 * @param {string} id - The ID of the post to be deleted.
 *
 * @example
 * // Delete a post with the ID "123"
 * deletePost("123");
 */

export function deletePost(id) {
  try {
    displayMessage("#deleteMessage", 'Post deleted. Please go to <a href="/feed/">Feed</a>', "success");
    removePost(id);
  } catch (error) {
    console.log("error delete", error);
  }
}
