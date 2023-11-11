import { setLoginFormListener } from "./handlers/login.js";
import { setRegisterFormListener } from "./handlers/register.js";
import { displayPosts } from "./handlers/displayPosts.js";
import { createPost } from "./api/posts/create.js";
import { updatePost } from "./api/posts/update.js";
import { removePost } from "./api/posts/delete.js";
import * as post from "./api/posts/index.js";
import { createPostFormListener } from "./handlers/createPost.js";
import { displayPost } from "./handlers/displayPost.js";
import { updateFormListener } from "./handlers/updatePost.js";
// import { renderPost } from "./components/posts/renderPost.js";
import { sortPosts } from "./handlers/sortPosts.js";

async function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      setLoginFormListener();
      return;
    case "/profile/register/":
      setRegisterFormListener();
      return;

    case "/feed/newPost/":
      createPostFormListener();
      sortPosts();
      return;

    case "/feed/edit/":
    case "/feed/edit/index.html":
      updateFormListener();
      return;

    case "/feed/":
    case "/feed/index.html":
      displayPosts();
      return;

    case "/feed/post/index.html":
    case "/feed/post/":
      displayPost();
      // renderPost();
      return;
  }
}

router();
