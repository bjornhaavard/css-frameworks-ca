export function renderPosts(posts, parent) {
  const html = posts.map(function (post) {
    const postContainer = document.querySelector("#posts-container");

    postContainer.classList.add("d-flex");
    postContainer.classList.add("row");
    postContainer.classList.add("row-cols-1");
    postContainer.classList.add("row-cols-lg-2");

    const divContainer = document.createElement("div");
    divContainer.classList.add("row");
    divContainer.classList.add("row-cols-1");
    divContainer.classList.add("row-cols-lg-2");
    divContainer.classList.add("align-items-stretch");
    divContainer.classList.add("justify-content-center");
    divContainer.classList.add("g-4");
    divContainer.classList.add("py-5");

    postContainer.append(divContainer);

    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-sm-10");
    div.classList.add("shadow-lg");
    div.classList.add("rounded-4");
    div.classList.add("g-4");
    div.classList.add("p-4");
    div.classList.add("m-3");

    const button = document.createElement("button");

    button.innerText = "View Post";
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mt-3");
    button.classList.add("align-self-end");
    button.setAttribute("id", "viewPost");

    const heading = document.createElement("h3");
    heading.innerText = post.title;

    div.append(heading);

    const author = document.createElement("p");
    author.innerText = post.author.name;

    div.append(author);

    postContainer.append(div);
    const image = document.createElement("img");
    image.src = post.media;

    div.append(image);
    div.append(button);
    divContainer.append(div);

    return;
  });

  const container = document.querySelector(parent);
  container.append(...html);
}
