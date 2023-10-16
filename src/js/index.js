import { setLoginFormListener } from "./handlers/login.js";
import { setRegisterFormListener } from "./handlers/register.js";
import * as posts from "./api/posts/index.js";

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/profile/register/":
      setRegisterFormListener();

      return;
    case "/":
      setLoginFormListener();

      return;
  }
}

router();

posts.createPost();
