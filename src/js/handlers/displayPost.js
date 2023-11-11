import { getPost, removePost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);

  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/feed";
  }

  const post = await getPost(id);
  parentElement.classList.add("d-flex");
  parentElement.classList.add("row");
  //   parentElement.classList.add("row-cols-1");
  //   parentElement.classList.add("row-cols-lg-2");

  const divContainer = document.createElement("div");
  divContainer.classList.add("row");
  divContainer.classList.add("row-cols-1");
  divContainer.classList.add("row-cols-lg-2");
  divContainer.classList.add("align-items-stretch");
  divContainer.classList.add("justify-content-center");
  divContainer.classList.add("g-4");
  divContainer.classList.add("py-5");

  parentElement.append(divContainer);

  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("col-sm-0");
  div.classList.add("shadow-lg");
  div.classList.add("rounded-4");
  div.classList.add("g-4");
  div.classList.add("p-4");
  div.classList.add("m-3");

  const heading = document.createElement("h3");
  heading.innerText = post.title;

  div.append(heading);

  const author = document.createElement("p");
  author.innerText = post.author.name;

  div.append(author);

  const body = document.createElement("p");
  body.innerText = post.body;

  div.append(body);

  parentElement.append(div);
  const image = document.createElement("img");
  image.src = post.media;

  div.append(image);
  divContainer.append(div);

  renderAdminButtons(div, post.author.name, post.id);

  const commentSection = document.querySelector("#commentSection");
  commentSection.classList.add("dflex");
  commentSection.classList.add("row");
  commentSection.classList.add("row-cols-1");
  commentSection.classList.add("row-cols-lg-2");
  commentSection.classList.add("align-items-stretch");
  commentSection.classList.add("justify-content-center");
  commentSection.classList.add("g-4");
  commentSection.classList.add("py-5");
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("post");
  commentContainer.classList.commentSection;
  const comments = document.createElement("p");

  comments.classList.add("p-2");

  commentSection.append(commentContainer);

  comments.innerText = post._count.comments;
  if (comments === false) {
    ("No comments yet");
  }
  commentContainer.append(comments);

  console.log(post);
}
