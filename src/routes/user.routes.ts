import { Router } from "express";
import { createUserController } from "../modules/useCases/Users/createUser";
import { listAllUsersController } from "../modules/useCases/Users/listAllUsers";
import { listPostOfUserController } from "../modules/useCases/Users/listPostOfUser";
import { listSpecificUserController } from "../modules/useCases/Users/listSpecificUser";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
    return response.status(200).json("ok");
});

usersRoutes.get("/list", (request, response) => {
    return listAllUsersController.handle(request, response);
});

usersRoutes.get("/userPost", (request, response) => {
    return listPostOfUserController.handle(request, response);
});
usersRoutes.get("/:id", (request, response) => {
    return listSpecificUserController.handle(request, response);
});
usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
});

export { usersRoutes };
