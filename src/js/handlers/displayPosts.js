import * as api from "../api/posts/index.js";
import { renderPosts } from "../components/posts/renderPosts.js";
import { getPost } from "../api/posts/index.js";

export async function displayPosts() {
  try {
    const posts = await api.getPosts();
    renderPosts(posts, "#posts-container");
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);
  const viewPost = document.querySelector("#viewPost");

  viewPost.addEventListener("click", () => {
    location.href = "/feed/post/";
    console.log(viewPost);
  });

  const postId = getPost(8206);

  const post = await getPost(postId);
  console.log(post);
}

displayPost();

// function getIdFromQueryString() {
//   const url = new URL(window.location);
//   const searchParams = url.searchParams;
//   return searchParams.get("id");
// }
