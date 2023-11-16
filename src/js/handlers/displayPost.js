import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";
import { displayMessage } from "../components/shared/displayMessage.js";
import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";
import { getPostComments } from "../helpers/makeComments.js";

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);

  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/feed";
  }

  const post = await getPost(id);
  parentElement.classList.add("d-flex");
  parentElement.classList.add("row");
  parentElement.classList.add("row-cols-lg-2");
  parentElement.classList.add("justify-content-center");

  const divContainer = document.createElement("div");
  divContainer.classList.add("row");
  divContainer.classList.add("align-items-stretch");
  divContainer.classList.add("justify-content-center");
  divContainer.classList.add("py-3");

  parentElement.append(divContainer);

  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("col-sm-0");
  div.classList.add("shadow-lg");
  div.classList.add("rounded-2");
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
  const defaultImage = "https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_1.png";
  image.src = post.media || defaultImage;

  div.append(image);
  divContainer.append(div);

  div.append(commentSection);

  renderAdminButtons(div, post.author.name, post.id);

  getPostComments();
}
