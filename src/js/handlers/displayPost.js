import { getPost, removePost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";

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

  const remove = document.createElement("a");

  remove.innerText = "Delete";
  remove.classList.add("btn");
  remove.classList.add("btn-primary");
  remove.classList.add("mt-3");
  remove.addEventListener("click", removePost);

  div.append(remove);

  console.log(post);
}
