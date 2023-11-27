// import { deletePost } from "../../handlers/deletePost.js";
/**
 * Renders admin buttons for a post.
 *
 * @param {HTML Element} parent - The parent element to which the buttons will be appended.
 * @param {string} authorName - The name of the post author.
 * @param {string} postId - The ID of the post.
 */

import { removePost } from "../../api/posts/delete.js";
import { getName } from "../../helpers/getName.js";
import { displayMessage } from "../shared/displayMessage.js";

export function renderAdminButtons(parent, authorName, postId) {
  const loggedInUsername = getName();

  console.log(loggedInUsername);

  if (loggedInUsername !== authorName) {
    return;
  }

  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("btn-group-vertical-lg");
  buttonGroup.classList.add("mt-2");
  buttonGroup.classList.add("align-self-end");

  const updateButton = document.createElement("a");

  updateButton.innerText = "Edit Post";
  updateButton.classList.add("btn");
  updateButton.classList.add("btn-primary");
  updateButton.href = `/feed/edit/index.html?id=${postId}`;

  buttonGroup.append(updateButton);

  const removeButton = document.createElement("a");

  removeButton.innerText = "Delete";
  removeButton.classList.add("btn");
  removeButton.classList.add("btn-primary");
  removeButton.classList.add("m-1");

  removeButton.addEventListener("click", async () => {
    try {
      await removePost(postId);
      displayMessage("#deleteMessage", 'Post deleted. Please go to <a href="/feed/">Feed</a>', "success");
    } catch (error) {
      console.log("error delete", error);
    }
  });

  buttonGroup.append(removeButton);

  parent.append(buttonGroup);
}
