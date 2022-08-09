// mode modules import
import mongoose from 'mongoose';

// custom modules import
import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
      const postMessages = await Post.find();
      res.status(200).json(postMessages);
  } catch (err) {
      res.status(404).json({ message: err.message })
  }
};

export const addPost = async (req, res) => {
    const { title, message, name, tags } = req.body;
    try {
        const newPost = await Post.create({
            title,
            message,
            name,
            creator: req.user.username,
            tags: tags.split(" ")
        });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
};

export const editPost = async (req, res) => {
    // identify the post - renaming the property name of id to _id (_id can be any name)
    const { id: _id } = req.params;
    // apply these changes
    const post = req.body;
    // validate the object id
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    // find and update
    try {
        const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
        console.log(updatedPost)
        res.status(204).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const removePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    try {
        await Post.findByIdAndRemove(id);
        res.status(205).json({ message: "Post has been removed" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    try {
        const post = await Post.findById(id);
        // check if the logged in user didn't like this post before
        const index = post.likes.findIndex((userID) => userID !== String(req.user.id));
        if (index === -1) {
            post.likes.push(req.user.id);
        } else {
            post.likes = post.likes.filter((userID) => userID !== String(req.user.id));
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
