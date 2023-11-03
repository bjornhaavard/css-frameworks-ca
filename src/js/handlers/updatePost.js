import { updatePost } from "../api/posts/index.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export function updateFormListener() {
  const form = document.querySelector("#updatePost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    updatePost(post);
  });
}
