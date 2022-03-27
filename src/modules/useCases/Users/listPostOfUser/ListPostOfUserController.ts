import { Request, Response } from "express";
import { ListPostOfUserUseCase } from "./ListPostOfUserUseCase";

class ListPostOfUserController {
    constructor(private listPostOfUserUseCase: ListPostOfUserUseCase) {}
    async handle(request: Request, response: Response) {
        const returnList = await this.listPostOfUserUseCase.execute();
        return response.status(200).json(returnList);
    }
}
export { ListPostOfUserController };
