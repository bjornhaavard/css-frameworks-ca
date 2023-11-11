import { getPosts } from "../api/posts/read.js";

export async function searchPostHandler() {
  getPosts();
  //   console.log(posts);
}

const searchBar = document.querySelector("#searchBar");
