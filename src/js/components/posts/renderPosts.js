import { defaultAvatarImage } from "../../api/constants.js";
import { displayMessage } from "../shared/displayMessage.js";

export function renderPosts(posts, parent) {
  const container = document.querySelector(parent);
  const searchMessage = document.querySelector("#search-message");
  container.innerHTML = "";
  searchMessage.innerHTML = "";

  if (posts.length === 0) {
    displayMessage("#search-message", "No posts found, please try again", "warning");
  }

  posts.map(function (post) {
    const postContainer = document.querySelector("#posts-container");

    const { id, title, media } = post;
    const { avatar, name } = post.author;

    const filterButton = document.createElement("btn");
    filterButton.classList.add("btn", "btn-primary");
    filterButton.innerText = "filter";

    const divContainer = document.createElement("div");
    divContainer.classList.add("row");
    divContainer.classList.add("row-cols-lg-3");
    divContainer.classList.add("align-items-stretch");
    divContainer.classList.add("justify-content-center");
    divContainer.classList.add("g-3");
    divContainer.classList.add("m-3");

    postContainer.append(divContainer);

    const div = document.createElement("div");
    div.classList.add("card", "col-sm-6");

    div.classList.add("shadow-lg");
    div.classList.add("rounded-4");
    div.classList.add("g-4");
    div.classList.add("p-4");
    div.classList.add("m-3");

    const link = document.createElement("a");

    link.innerText = "View Post";
    link.classList.add("btn");
    link.classList.add("btn-primary");
    link.classList.add("mt-3");
    link.classList.add("align-self-end");
    link.href = `/feed/post/index.html?id=${id}`;

    const heading = document.createElement("h3");
    heading.innerText = title;

    const authorAvatar = document.createElement("img");

    authorAvatar.src = avatar || defaultAvatarImage;

    authorAvatar.classList.add("img-fluid", "img-thumbnail", "rounded-circle", "post-thumbnail", "card");
    authorAvatar.style.width = "20%";

    const author = document.createElement("p");
    author.classList.add("mb-1");
    author.innerText = name;

    div.append(author);
    div.append(authorAvatar);
    div.append(heading);

    postContainer.append(div);
    const image = document.createElement("img");
    const defaultImage = "https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_1.png";
    image.classList.add("w-100");
    image.src = media || defaultImage;

    div.append(image);
    div.append(link);
    divContainer.append(div);

    return;
  });

  // container.append(...html);
}
