import { Router } from "express";
import { postService } from "./post.service"; // তোমার service import

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const data = req.body;
    const result = await postService.createPost(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
});

export const postRouter: Router = router;