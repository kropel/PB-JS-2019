const axios = require("axios");

const getData = async (path) => {
  let data = await axios.get(path);
  return data.data;
};

(async (id) => {
  let userPath = `https://jsonplaceholder.typicode.com/users/${id}`;
  let postPath = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  let commentPath = "https://jsonplaceholder.typicode.com/comments?postId=";
  try {
    let { name, email } = await getData(userPath);
    let postData = await getData(postPath);
    let idArray = postData.map((post) => post.id);
    let commentData = await Promise.all(
      idArray.map((id) => getData(commentPath + id))
    );
    let commentQuantity = commentData.reduce(
      (quantity, current) => quantity + current.length,
      0
    );
    console.log(`Name: ${name}\tEmail: ${email}`);
    console.log(`Number of posts: ${postData.length}`);
    console.log(`Number of comments: ${commentQuantity}`);
  } catch (error) {
    console.log(error);
  }
})(2);
