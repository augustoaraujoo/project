import { Response, Request } from "express";
import { ListSpecificUserUseCase } from "./ListSpecificUserUseCase";

class ListSpecificUserController {
    constructor(private listSpecificUserUseCase: ListSpecificUserUseCase) {}
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const list = await this.listSpecificUserUseCase.execute({ id });
        return response.status(200).json(list);
    }
}
export { ListSpecificUserController };
