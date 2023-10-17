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
      case "/feed/":
        posts.updatePost({
          id: 7783,
          title: "test title updated more",
          body: "testing body updated again"
        })
        return;
  }
}

router();

