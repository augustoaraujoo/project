import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private createUseCase: CreateUserUseCase) { }
    handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const create = this.createUseCase.execute({ name, email, password })
        return response.status(201).json(create);


    }
}
export { CreateUserController }