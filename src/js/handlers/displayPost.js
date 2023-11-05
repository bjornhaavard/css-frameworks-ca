import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);

  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/feed";
  }

  const post = await getPost(id);
  console.log(post);
}
