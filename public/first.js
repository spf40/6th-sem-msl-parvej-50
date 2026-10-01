console.log("I am connected");

const postsContainer = document.getElementById("posts-container");
console.log(postsContainer);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    data.forEach((post) => {
      console.log(post);

      postsContainer.innerHTML += `
        <tr>
          <td style="text-align:center">${post.userId}</td>
          <td style="text-align:center">${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
      `;
    });
  });