import { setLoginFormListener } from "./handlers/login.js";
import { setRegisterFormListener } from "./handlers/register.js";
import { displayPosts } from "./handlers/displayPosts.js";
import * as post from "./api/posts/index.js";
import { createPostFormListener } from "./handlers/createPost.js";
import { displayPost } from "./handlers/displayPost.js";
import { updateFormListener } from "./handlers/updatePost.js";
import { searchPostHandler } from "./handlers/searchPosts.js";
import * as handler from "./handlers/index.js";
import { displayProfileData } from "./components/profile/profileHome.js";

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      setLoginFormListener();
      return;
    case "/profile/register/":
      setRegisterFormListener();
      return;

    case "/profile/":
      displayProfileData();
      return;

    case "/feed/newPost/":
      createPostFormListener();

      return;

    case "/feed/edit/":
    case "/feed/edit/index.html":
      updateFormListener();
      return;

    case "/feed/":
    case "/feed/index.html":
      displayPosts();
      searchPostHandler();
      handler.sortPostsHandler();

      return;

    case "/feed/post/index.html":
    case "/feed/post/":
      displayPost();

      return;
  }
}

router();
