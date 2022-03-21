import { Router } from "express";
import { createUserController } from "../modules/useCases/createUser";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
    return response.status(200).json("ok")
});
usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
})
export { usersRoutes };
