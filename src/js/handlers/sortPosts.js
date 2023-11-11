// import { getPosts } from "../api/posts";

const sortAction = document.querySelectorAll(".dropdown-menu li");

console.log(sortAction);

export async function sortPosts() {
  sortAction.forEach((link) => {
    link.addEventListener("click", async () => {
      const categoryId = link.dataset.id;
      const posts = await getPosts(categoryId);
      renderPosts(posts, "post-container");
      console.log(posts);
    });
  });
}
