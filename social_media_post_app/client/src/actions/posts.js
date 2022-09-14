import * as api from "../api/index.js";

//action creators ->> function that return actions.
//redux thunk for asynchronous redux actions

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
// That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside
// the function’s body once the asynchronous operations have been completed.
export const getPosts = () => async (dispatch) => {
  try {
    // fetch all the data from api.
    const { data } = await api.fetchPosts();

    //earlier here was return action changed to -> dispatch(action)
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    //this is making a post request to our backend server and we are sending a post right there.
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // inside of the try we are going to write the api request to updating the post
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
