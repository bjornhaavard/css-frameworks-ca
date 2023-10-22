import { createPost } from "../api/posts/create.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export function setNewPostFormListener() {
  const form = document.querySelector("#newPostForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());

    console.log(postData);

    try {
      await createPost(postData);
      displayMessage("#message", "success");
      form.reset();
    } catch (error) {
      console.error(error);
      displayMessage("#message", error.message, "warning");
    }
  });
}

setNewPostFormListener();
