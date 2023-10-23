export function renderPosts(posts, parent) {
  const html = posts.map(function (post) {
    // const postContainer = document.querySelector("#posts-container");

    // postContainer.classList.add = "d-flex";
    // postContainer.classList.add = "row";
    // postContainer.classList.add = "row-cols-1";
    // postContainer.classList.add = "row-cols-lg-2";

    // const div = document.createElement("div");
    // div.classList.add("card");
    // div.classList.add("post");
    // div.classList.add("card-cover");
    // div.classList.add("align-items-stretch");
    // div.classList.add("shadow-lg");
    // div.classList.add("rounded-4");
    // div.classList.add("g-4");
    // div.classList.add("p-4");
    // div.classList.add("m-3");

    // const button = document.createElement("button");

    // button.innerText = "View Post";
    // button.classList.add("btn");
    // button.classList.add("btn-primary");
    // button.classList.add("mt-3");

    // const heading = document.createElement("h3");
    // heading.innerText = post.title;

    // div.append(heading);

    // const author = document.createElement("p");
    // author.innerText = post.author.name;

    // div.append(author);

    // const body = document.createElement("p");
    // body.innerText = post.body;

    // div.append(body);
    // postContainer.append(div);
    // const image = document.createElement("img");
    // image.src = post.media;
    // image.classList.add = "img-fluid";

    // // imageContainer.appendChild(image);
    // div.append(image);

    // div.append(button);
    // postContainer.append(div);
    // console.log(div);

    // return div;

    const postTitle = document.querySelector("#post-title");
    const author = document.querySelector("#author");
    const body = document.querySelector("#body-text");
    const image = document.querySelector("#image-container");

    const heading = postTitle;
    heading.innerText = post.title;

    const authTitle = author;
    authTitle.innertext = post.author.name;

    // postTitle.append(heading);
  });

  const container = document.querySelector(parent);
  container.append(...html);
}
