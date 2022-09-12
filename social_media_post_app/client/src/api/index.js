//implementing the calls to the api.
import axios from "axios";
//the url pointing to our backend route.
const url = "http://localhost:5000/posts";
// (lhost/5000/posts returs all the posts in our database._)

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
