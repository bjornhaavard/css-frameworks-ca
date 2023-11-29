import { API_SOCIAL_URL } from "../api/constants.js";
import { fetchWithToken } from "../api/fetchWithToken.js";
import { renderPosts } from "../components/posts/renderPosts.js";
// import { getPosts } from "../api/posts.js";

export async function getPostsWithComments(posts) {
  const response = await fetchWithToken(`${API_SOCIAL_URL}/posts?_reactions=true&_author=true&_comments=true&_limit=20`);
  // const container = document.querySelector("#posts-container");

  if (response.ok) {
    const postsData = await response.json();

    const postsWithComments = postsData.filter((post) => post.comments.length > 0);
    // renderPosts;
    console.log(postsWithComments);
    return;
  }

  throw new Error(response.statusText);
}

const filterCommentsButton = document.querySelector("#filter-posts");

filterCommentsButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const posts = await getPostsWithComments();
  // console.log(filterPost);
  renderPosts(posts, "#posts-container");
});
