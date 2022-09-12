import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({
  posts,
  //   posts: posts, meaning posts where key and value are same
});
