const sortAction = document.querySelectorAll(".dropdown-menu li");

console.log(sortAction);

sortAction.forEach((link) => {
  link.addEventListener("click", async () => {
    const categoryId = link.dataset.id;
    const posts = await getPosts(categoryId);
    renderPosts(posts, "post-container");
  });
});
