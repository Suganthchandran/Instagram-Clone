import Post from "../models/postModel.js";
import { v2 as cloudinary } from "cloudinary";

export const createPost = async (req, res) => {
  try {
    const { caption, category, userId, imageUrl, hashtags } = req.body;

    // const uploaded = await cloudinary.uploader.upload(imageUrl, {
    //   resource_type: "auto",
    // });

    const newPost = await Post.create({
      userId,
      imageUrl,
      caption,
      category,
      hashtags,
    });

    res.status(201).json({ message: "Post created", post: newPost });
  } catch (err) {
    res.status(500).json({ message: "Post creation failed", error: err.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    console.log("Get all post");
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Fetching posts failed", error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("userId", "username email");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Fetching post failed", error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Deleting post failed", error: err.message });
  }
};
