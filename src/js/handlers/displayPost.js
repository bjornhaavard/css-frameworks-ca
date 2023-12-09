import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";
import { renderAdminButtons } from "../components/posts/renderAdminButtons.js";
import { getPostComments } from "../helpers/makeComments.js";
import { defaultAvatarImage, defaultImage } from "../api/constants.js";

/**
 * Displays a post on the specified container element.
 *
 * @async
 * @function
 * @param {string} [container="#post-container"] - The CSS selector for the container element where the post will be displayed.
 * @returns {Promise<void>} - A Promise that resolves once the post is displayed.
 * @throws {Error} - If the post ID is missing, redirects to the feed page.
 */

export async function displayPost(container = "#post-container") {
  const parentElement = document.querySelector(container);
  const placeHolder = document.querySelector("#spinner");
  const id = getParamFromQueryString("id");

  if (!id) {
    location.href = "/feed";
  }

  const post = await getPost(id);

  if (post) {
    placeHolder.style.display = "none";
  }
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

  /**
   * Renders admin buttons for the post.
   *
   * @param {HTMLElement} container - The container element to which admin buttons will be appended.
   * @param {string} authorName - The name of the post author.
   * @param {string} postId - The ID of the post.
   */

  renderAdminButtons(div, name, id);

  getPostComments();
}
