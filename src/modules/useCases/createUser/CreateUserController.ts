import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private createUseCase: CreateUserUseCase) { }
    handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            throw new Error("error");
        }
        
        try {
            const create = this.createUseCase.execute({ name, email, password })
            return response.status(201).json(create);

        } catch (error) {
            return response.status(400).json({ err: error });
        }

    }
}
export { CreateUserController }