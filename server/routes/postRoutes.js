import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/", (req, res) => {
  console.log("Get all posts");
  getAllPosts(req, res); 
});

router.get("/:id", getPostById);
router.delete("/:id", deletePost);

export default router;
