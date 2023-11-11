import { displayMessage } from "../components/shared/displayMessage";

export function deletePost() {
  //   removeButton.addEventListener("click", async () => {
  try {
    displayMessage("#deleteMessage", 'Post deleted. Please go to <a href="/feed/">Feed</a>', "success");
    removePost(id);
  } catch (error) {
    console.log("error delete", error);
  }
  //   });
}
