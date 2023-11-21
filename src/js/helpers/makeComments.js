import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";

export async function getPostComments() {
  const id = getParamFromQueryString("id");
  const post = await getPost(id);

  if (post.comments.length > 0) {
    const commentSection = document.querySelector("#commentSection");

    post.comments.forEach((comment) => {
      commentSection.classList.add("dflex");
      commentSection.classList.add("row");
      commentSection.classList.add("row-cols-lg-1");
      commentSection.classList.add("justify-content-center");
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("card");
      commentContainer.classList.add("rounded-4");
      commentContainer.classList.add("mt-5");

      const avatar = document.createElement("img");
      const commentAuthor = document.createElement("h5");
      const commentPara = document.createElement("p");
      const defaultAvatarImage = "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg";
      avatar.src = comment.author.avatar || defaultAvatarImage;
      avatar.classList.add("img-fluid", "img-thumbnail", "rounded-circle", "post-thumbnail", "card");
      avatar.style.width = "10%";
      commentPara.classList.add("fst-italic");

      commentSection.append(commentContainer);
      console.log(comment.author.banner);
      commentAuthor.innerText = comment.author.name;
      commentPara.innerText = comment.body;
      commentContainer.append(commentAuthor, avatar, commentPara);
    });
  } else {
    const commentSection = document.querySelector("#commentSection");

    // commentSection.classList.add("dflex");
    commentSection.classList.add("row");
    commentSection.classList.add("row-cols-lg-1");
    commentSection.classList.add("justify-content-center");
    commentSection.classList.add("mx-1");
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("card");
    commentContainer.classList.add("rounded-2");
    commentContainer.classList.add("mt-5");

    const comments = document.createElement("p");

    comments.classList.add("fst-italic");

    commentSection.append(commentContainer);
    comments.innerText = "No comments yet";
    commentContainer.append(comments);
  }
}
