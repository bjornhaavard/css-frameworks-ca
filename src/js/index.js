import { setLoginFormListener } from "./handlers/login.js";
import { setRegisterFormListener } from "./handlers/register.js";
import { displayPosts } from "./handlers/displayPosts.js";
import { createPost } from "./api/posts/create.js";
import { updatePost } from "./api/posts/update.js";
import { removePost } from "./api/posts/delete.js";
import * as post from "./api/posts/index.js";

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
      // updatePost({
      //   id: 8155,
      //   title: "testing a post",
      //   body: "test test",
      //   media: "https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // });
      // post.createPost();
      // post.updatePost();
      post.removePost(8306);
      // post.getPost(8230).then(console.log);
      return;
  }
}

router();
