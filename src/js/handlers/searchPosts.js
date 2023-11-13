import { getPosts } from "../api/posts/index.js";

export async function searchPostHandler() {
  //   const posts = await getPosts();

  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", async () => {
    const searchQuery = searchInput.value.trim();

    const response = await getPosts(`/social/posts?_tag=my_tag${searchQuery}`);
    const posts = await response.json();
    console.log(searchQuery);
  });
}
// [5:48 PM] Connor obrien
// You will have an input and a button.

// When you the button is clicked get the value of the input. Then make an api call with that value,

// /social/posts?_tag=my_tag
// [5:48 PM] Connor obrien
// my_tag will be the value from the input
