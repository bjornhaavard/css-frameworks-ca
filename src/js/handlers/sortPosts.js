import { sortPosts } from "../api/posts/sortPost.js";
import { renderPosts } from "../components/posts/renderPosts.js";

export async function sortPostsHandler() {
  const dropdown = document.querySelector("#sortDropdown");

  // dropdown.addEventListener("change", async () => {
  //   const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  //   let sortParam = "created";
  //   let sortOrderParam = "desc";

  //   if (selectedOption === "newest") {
  //     sortParam = "created";
  //     sortOrderParam = "desc";
  //   } else if (selectedOption === "oldest") {
  //     sortParam = "created";
  //     sortOrderParam = "asc";
  //   }
  //   const posts = await sortPosts(sortParam, sortOrderParam);
  //   console.log(posts);
  //   renderPosts(posts, "#posts-container");
  // });
  const sortLinks = document.querySelectorAll("#sortDropdown li a");

  sortLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault(); // Prevent default link navigation

      const sortParam = event.target.dataset.sort;
      const sortOrderParam = event.target.dataset.sortOrder;

      const posts = await sortPosts(sortParam, sortOrderParam);
      console.log(posts);
      renderPosts(posts, "#posts-container");
    });
  });
}
