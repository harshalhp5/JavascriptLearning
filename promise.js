const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Wrong. Something is wrong");
      }
    }, 2000);
  });
}

//createPost ( { title : 'Post Three', body : 'This is Post Three'})
//.then(getPosts);
//.catch(err => console.log(err));

// to check the error set error = true;
// and call .catch like below line
//.catch(err => console.log(err));

/*
// ASYNC AWAIT
async function init() {
  await createPost ({ title : 'Post Three', body : 'This is Post Three'});
  getPosts();
}
init();

*/

// ASYNC / AWAIT / FETCH

async function fetchUsers() {

    const res = await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
  
    console.log(data);

}
fetchUsers(); // For execution it may take time. But it will not block the other executions.
console.log("Hello World");
/*
// Promise.all
const promise1 = Promise.resolve("Hello Harshal");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

*/