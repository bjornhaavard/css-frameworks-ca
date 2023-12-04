import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";
import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";
import { getPostComments } from "../helpers/makeComments.js";
import { defaultAvatarImage, defaultImage } from "../api/constants.js";

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);

  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/feed";
  }

  const post = await getPost(id);

  const {
    title,
    body,
    media,
    author: { avatar, name },
  } = post;

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
  heading.innerText = title;

  div.append(heading);

  const authAvatar = document.createElement("img");
  authAvatar.classList.add("img-fluid", "img-thumbnail", "rounded-2", "post-thumbnail", "card");
  authAvatar.style.width = "18%";
  authAvatar.src = avatar || defaultAvatarImage;

  div.append(authAvatar);
  const author = document.createElement("p");
  author.innerText = name;

  div.append(author);

  const bodyPara = document.createElement("p");
  bodyPara.innerText = body;

  div.append(bodyPara);

  parentElement.append(div);
  const image = document.createElement("img");
  image.src = media || defaultImage;

  div.append(image);
  divContainer.append(div);

  div.append(commentSection);

  renderAdminButtons(div, name, id);

  getPostComments();
}
