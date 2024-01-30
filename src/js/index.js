import * as handler from "./handlers/index.js";
import { displayProfileData } from "./components/profile/profileHome.js";

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      handler.setLoginFormListener();

      return;
    case "/profile/register/":
      handler.setRegisterFormListener();
      return;

    case "/profile/":
    case "/profile/index.html":
      displayProfileData();

      handler.logOut();
      return;

    case "/feed/newPost/":
      handler.createPostFormListener();

      return;

    case "/feed/edit/":
    case "/feed/edit/index.html":
      handler.updateFormListener();
      return;

    case "/feed/":
    case "/feed/index.html":
      handler.displayPosts();
      handler.searchPostHandler();
      handler.sortPostsHandler();
      handler.getPostsWithComments();
      return;

    case "/feed/post/index.html":
    case "/feed/post/":
      handler.displayPost();

      return;
  }
}

router();
