import { fetchWithToken } from "../api/fetchWithToken.js";
import { createPost } from "../api/posts/create.js";
import { displayMessage } from "../components/shared/displayMessage.js";

// export function setNewPostFormListener(formInput, token) {
//   const formInput = document.querySelector("#newPostForm");
//   const formData = new formData(formInput);
//   const postContent = formData.get("post-content");

//   const requestOptions = {
//     method: "post",
//     body: JSON.stringify({
//       content: postContent,
//     }),
//   };

//   const token = localStorage.getItem("token")
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//  fetchWithToken("/api/posts", requestOptions, token)
//  .then(response => response.json())
//  .then(data) => {
//   if(data.succes) {
//     $("#createPostModal").modal("hide");
//     location.reload
//   }
//   else {
//     displayMessage("alert");
//   }
//  });
//  }
// }

//     try {
//       createPost(postData);
//       displayMessage("#message", "success");
//       form.reset();
//     } catch (error) {
//       console.error(error);
//       displayMessage("#message", error.message, "warning");
//     }
//   });
// }
// function createPost() {
//   try {
//     const formInput = document.querySelector("#newPostForm");
//     const formData = new FormData(formInput);
//     const postContent = formData.get("post-content");

//     const requestOptions = {
//       method: "POST",
//       body: JSON.stringify({
//         content: postContent,
//       }),
//     };

//     const token = localStorage.getItem("token");

//     fetchWithToken("/api/posts", requestOptions, token)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // Post created successfully.
//           // Close the modal and reload the posts.
//           $("#createPostModal").modal("hide");
//           location.reload();
//         } else {
//           // There was an error creating the post.
//           // Show an error message to the user.
//           $("#createPostError").text(data.error);
//         }
//       });
//   } catch (error) {
//     // Handle the error.
//     console.error(error);
//     $("#createPostError").text("There was an error creating the post.");
//   }
// }

// createPost();

export function createPost(post) {
  const { title, author, media } = post;
  const div = document.createElement("a");
  const heading = document.createElement("h3");
  const img = getImageFromContent(post.media);
  const imageContainer = document.createElement("div");
  const paragraph = document.createElement("p");

  div.classList.add("post");
  heading.innerText = post.title;
  imageContainer.classList.add("post-image");
  imageContainer.style.backgroundImage = `url(${img})`;
  div.append(heading, imageContainer);
  console.log(post);
}
