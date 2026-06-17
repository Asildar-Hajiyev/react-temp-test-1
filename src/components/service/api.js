import axios from "axios";

// axios.get
// axios.post
// axios.put
// axios.delete

async function getData() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
async function getUser() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}
export { getData , getUser};
