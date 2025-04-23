import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  caption: { type: String },
  category: { type: String },
  hashtags: [{ type: String }],
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;
