import { displayPost } from "../../handlers/displayPost";

export function renderPost(post, parent) {
  const html = document.querySelector("#post-container");

  //   displayPost(viewPost);
  console.log(viewPost);
  console.log(post);
  const container = document.querySelector(parent);
  container.append(...html);
}
