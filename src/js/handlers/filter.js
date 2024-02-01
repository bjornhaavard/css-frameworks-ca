import { API_SOCIAL_URL } from "../api/constants.js";
import { fetchWithToken } from "../api/fetchWithToken.js";
import { renderPosts } from "../components/posts/renderPosts.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export async function getPostsWithComments() {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_reactions=true&_author=true&_comments=true&_limit=20`);

  if (response.ok) {
    const postsData = await response.json();

    const postsWithComments = postsData.filter((post) => post.comments.length > 0);
    const filterCommentsButton = document.querySelector("#filter-posts");

    filterCommentsButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const posts = await getPostsWithComments();

      renderPosts(posts, "#posts-container");
      const filterMessage = document.querySelector("#filter-message");
      if (filterMessage) {
        displayMessage("#filter-message", `Showing ${posts.length} posts with comments`, "success");
      }
    });

    return postsWithComments;
  }

  throw new Error(displayMessage("#posts-container", "There was an error", "danger"));
}
