//implementing the calls to the api.
import axios from "axios";
//the url pointing to our backend route.
const url = "http://localhost:5000/posts";
// (lhost/5000/posts returs all the posts in our database._)

// **** actions are USING the api(the api folder that you are seeing on the left)
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
