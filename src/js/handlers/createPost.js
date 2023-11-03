import { createPost } from "../api/posts/index.js";

import { displayMessage } from "../components/shared/displayMessage.js";

export function createPostFormListener() {
  const form = document.querySelector("#createPost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    createPost(post);
  });
}

// export function createPost(post) {
//   const { title, author, media } = post;
//   const div = document.createElement("a");
//   const heading = document.createElement("h3");
//   const img = getImageFromContent(post.media);
//   const imageContainer = document.createElement("div");
//   const paragraph = document.createElement("p");

//   div.classList.add("post");
//   heading.innerText = post.title;
//   imageContainer.classList.add("post-image");
//   imageContainer.style.backgroundImage = `url(${img})`;
//   div.append(heading, imageContainer);
//   console.log(post);
// }
