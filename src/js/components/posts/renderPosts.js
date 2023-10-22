export function renderPosts(posts, parent) {
  const html = posts.map(function (post) {
    const postCard = document.querySelector("#postCard");

    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("post");
    div.classList.add("card-cover");
    div.classList.add("align-items-stretch");
    div.classList.add("shadow-lg");
    div.classList.add("rounded-4");
    div.classList.add("g-4");
    div.classList.add("p-4");
    div.classList.add("m-3");

    // const imageContainer = document.createElement("div");
    // imageContainer.classList.add("img-fluid");
    // imageContainer.classList.add("post-image");

    const heading = document.createElement("h3");
    heading.innerText = post.title;

    div.append(heading);

    const author = document.createElement("p");
    author.innerText = post.author.name;

    div.append(author);

    const body = document.createElement("p");
    body.innerText = post.body;

    div.append(body);

    const image = document.createElement("img");
    image.src = post.media;

    // imageContainer.appendChild(image);
    div.append(image);
    console.log(div);

    return div;
  });

  const container = document.querySelector(parent);
  container.append(...html);
}
