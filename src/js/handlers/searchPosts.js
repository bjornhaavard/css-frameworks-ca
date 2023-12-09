import { searchPosts } from "../api/posts/search.js";
import { renderPosts } from "../components/posts/renderPosts.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export async function searchPostHandler() {
  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    if (searchQuery === "") {
      return;
    }

    try {
      const posts = await searchPosts(searchQuery);

      renderPosts(posts, "#posts-container");
      console.log();
      displayMessage("#filter-message", `Showing  ${posts.length} posts from search  ${searchInput.value}`, "success");
    } catch (error) {
      console.log(error);
      displayMessage("#posts-container", `Something went wrong: ${error}`, "danger");
    }
  });
}
