import { sortPosts } from "../api/posts/sortPost.js";
import { renderPosts } from "../components/posts/renderPosts.js";

export async function sortPostsHandler() {
  const sortLinks = document.querySelectorAll("#sortDropdown li a");

  sortLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();

      const sortParam = event.target.dataset.sort;
      const sortOrderParam = event.target.dataset.sortOrder;

      const posts = await sortPosts(sortParam, sortOrderParam);
      console.log(posts);
      renderPosts(posts, "#posts-container");
    });
  });
}
