import * as api from "../api/posts/index.js";
import { renderPosts } from "../components/posts/renderPosts.js";

export async function displayPosts() {
  try {
    const posts = await api.getPosts();
    renderPosts(posts, "#posts-container");
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
