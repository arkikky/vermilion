const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function loadPosts() {
  const res = await fetch(apiUrl);
  const posts = await res.json();

  const container = document.getElementById("posts");
  container.innerHTML = "";

  posts.slice(0, 5).forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadPosts);
