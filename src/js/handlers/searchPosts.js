import { searchPosts } from "../api/posts/search.js";
import { displayPosts } from "./displayPosts.js";

export async function searchPostHandler() {
  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", async () => {
    const searchQuery = searchInput.value.trim();

    const response = await searchPosts(`/social/posts?_tag=${searchQuery.value}`);
    const posts = await response.json();
    displayPosts(posts, "#post-container");
    console.log(searchQuery.value);
  });
}
// [5:48 PM] Connor obrien
// You will have an input and a button.

// When you the button is clicked get the value of the input. Then make an api call with that value,

// /social/posts?_tag=my_tag
// [5:48 PM] Connor obrien
// my_tag will be the value from the input
