import { createPost } from "../api/posts/index.js";

import { displayMessage } from "../components/shared/displayMessage.js";

export function createPostFormListener() {
  const form = document.querySelector("#createPost");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    post.tags = post.tags.split(",").map((item) => item.trim());

    console.log(post);

    try {
      await createPost(post);
      displayMessage("#message", 'Post successful. Please go to <a href="/feed/">Feed</a>', "success");
      form.reset();
    } catch (error) {
      console.error(error);
      displayMessage("#message", error.message, "warning");
    }
  });
}
