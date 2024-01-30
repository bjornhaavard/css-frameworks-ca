import { getPost, updatePost } from "../api/posts/index.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export async function updateFormListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  console.log(id);
  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);
    console.log(post);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      const tagsInput = form.querySelector("input[name='tags']").value;
      const tagsArray = tagsInput.split(",").map((tag) => tag.trim());
      post.tags = tagsArray;

      post.id = id;
      displayMessage("#updateMessage", 'Post updated. Please go to <a href="/feed/">Feed</a>', "success");
      updatePost(post);
    });
  }
}
