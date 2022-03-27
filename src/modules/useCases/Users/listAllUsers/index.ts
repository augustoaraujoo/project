import { PrismaClient } from "@prisma/client";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";
import { ListAllUsersController } from "./ListAllUsersController";

const prisma = new PrismaClient();
const listAllUsersUseCase = new ListAllUsersUseCase(prisma);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };
