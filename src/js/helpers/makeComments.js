import { getPost } from "../api/posts/index.js";
import { getParamFromQueryString } from "../helpers/getParamFromQueryString.js";

export async function getPostComments() {
  const id = getParamFromQueryString("id");
  const post = await getPost(id);

  if (post.comments.length > 0) {
    const commentSection = document.querySelector("#commentSection");

    post.comments.forEach((comment) => {
      const {
        body,
        author: { avatar, name },
      } = comment;

      commentSection.classList.add("dflex");
      commentSection.classList.add("row");
      commentSection.classList.add("row-cols-lg-1");
      commentSection.classList.add("justify-content-center");
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("card");
      commentContainer.classList.add("rounded-4");
      commentContainer.classList.add("mt-5");

      const avatarPic = document.createElement("img");
      const commentAuthor = document.createElement("h5");
      const commentPara = document.createElement("p");
      const defaultAvatarImage = "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg";
      avatarPic.src = avatar || defaultAvatarImage;
      avatarPic.classList.add("img-fluid", "img-thumbnail", "rounded-circle", "post-thumbnail", "card");
      avatarPic.style.width = "10%";
      commentPara.classList.add("fst-italic");

      commentSection.append(commentContainer);
      commentAuthor.innerText = name;
      commentPara.innerText = body;
      commentContainer.append(commentAuthor, avatarPic, commentPara);
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
