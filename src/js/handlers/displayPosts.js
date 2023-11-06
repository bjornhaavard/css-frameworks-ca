import * as api from "../api/posts/index.js";
import { renderPosts } from "../components/posts/renderPosts.js";
import { getPost } from "../api/posts/index.js";

export async function displayPosts() {
  try {
    if (renderPosts) {
      const placeHolder = document.querySelector("#placeholder-glow");
      placeHolder.style.display = "none";
    }
    const posts = await api.getPosts();
    renderPosts(posts, "#posts-container");
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
