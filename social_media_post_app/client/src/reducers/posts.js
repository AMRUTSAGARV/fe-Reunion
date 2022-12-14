// reducer function accepts a state and an action . then based on the action type it perform some logic.
// here state ==posts in our condition -> const reducer =(state=[],action)=>{}
import { FETCH_ALL, DELETE, CREATE, UPDATE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      //we are going to return all the post but we are filtering out the one that we deleted.
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      //here action.payload is updated post
      //first we map over the post we check what is the one post that changed or here the post which is liked . Then return the post that is changed if the post is not liked then return the post as it was .
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};

// const reducer = (posts = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return posts;
//     case "CREATE":
//       return posts;

//     default:
//       return posts;
//   }
// };
