export function renderPosts(posts, parent) {
  const html = posts.map(function (post) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.classList.add("m-5");
    div.classList.add("p-5");

    const heading = document.createElement("h3");
    heading.innerText = post.title;

    div.append(heading);

    const author = document.createElement("p");
    author.innerText = post.author.name;

    div.append(author);

    const body = document.createElement("p");
    body.innerText = post.body;

    div.append(body);

    return div;
  });

  const container = document.querySelector(parent);
  container.append(...html);
}
