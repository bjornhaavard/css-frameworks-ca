import * as api from "../api/posts/index.js";
import { renderPosts } from "../components/posts/renderPosts.js";
import { displayMessage } from "../components/shared/displayMessage.js";

/**
 * Displays a list of posts on the specified container element.
 *
 * @async
 * @function
 * @throws {Error} If there is an issue fetching or rendering the posts,
 * an error message is displayed, and the error is logged to the console.
 * @returns {Promise<void>} A Promise that resolves once the posts are displayed.
 */

export async function displayPosts() {
  /**
   * Renders a list of posts on the specified container element.
   *
   * @function
   * @param {Array} posts - An array of post objects to be rendered.
   * @param {string} container - The CSS selector for the container element where the posts will be displayed.
   */
  try {
    const placeHolder = document.querySelector("#spinner");

    if (renderPosts) {
      placeHolder.style.display = "none";
    }
    const posts = await api.getPosts();

    renderPosts(posts, "#posts-container");
  } catch (error) {
    displayMessage("#error-message", 'Go to <a href="/">Login page</a>', "danger");
    console.log(error);
  }
}
