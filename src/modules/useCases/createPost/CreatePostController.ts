import { CreatePostUseCase } from "./CreatePostUseCase";
import { Request, Response } from 'express';

class CreatePostController {
    constructor(private createPostUseCase: CreatePostUseCase) { }
    handle(request: Request, response: Response) {
        const { id, title, description } = request.body;
        const createPost = this.createPostUseCase.execute({ id, title, description })
        return response.status(201).json(createPost);
    }
}
export { CreatePostController } 