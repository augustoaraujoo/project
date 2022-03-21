import { Router } from "express";
import { createPostController } from "../modules/useCases/createPost";

const postsRoutes = Router();

postsRoutes.post("/", (request, response) => {
    return createPostController.handle(request, response);
})
export { postsRoutes }