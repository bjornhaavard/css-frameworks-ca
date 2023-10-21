import { setLoginFormListener } from "./handlers/login.js";
import { setRegisterFormListener } from "./handlers/register.js";
import { displayPosts } from "./handlers/displayPosts.js";

async function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/profile/register/":
      setRegisterFormListener();

      return;
    case "/":
      setLoginFormListener();

      return;
    case "/feed/":
    case "/feed/index.html":
      displayPosts();

      return;
  }
}

router();
