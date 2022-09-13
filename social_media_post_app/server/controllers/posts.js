import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// {     after implmenting the contoller functions then next step is to go to api folder index.js to implement the api call }

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// {     after implmenting the contoller functions then next step is to go to api folder index.js to implement the api call }

export const updatePost = async (req, res) => {
  //post is an object contains movie ,description.etc
  //extract that id from request.params
  const { id: _id } = req.params;
  const post = req.body;
  //if id is not valid.
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id.");
  //if id is valid we ca n update this post.
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

// {     after implmenting the contoller functions then next step is to go to api folder index.js to implement the api call }

export const deletePost = async (req, res) => {
  //extract that id from req.params
  const { id } = req.params;
  const post = req.body;

  //if id is not valid.
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id.");
  //here pass the id that we are recieving from params.
  await PostMessage.findByIdAndRemove(id);

  console.log("DELETE!");

  res.json({ message: "Post deleted successfully" });
};

// {     after implmenting the contoller functions then next step is to go to api folder index.js to implement the api call }
