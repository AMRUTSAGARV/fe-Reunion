import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  //we are going to covert the image into string.
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// now that we have a schema we have to turn it into a module
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
