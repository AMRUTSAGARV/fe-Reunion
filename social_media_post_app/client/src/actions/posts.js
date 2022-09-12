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
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    //this is making a post request to our backend server and we are sending a post right there.
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};