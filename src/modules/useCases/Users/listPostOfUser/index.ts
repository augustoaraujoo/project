import { PrismaClient } from "@prisma/client";
import { ListPostOfUserUseCase } from "./ListPostOfUserUseCase";
import { ListPostOfUserController } from "./ListPostOfUserController";

const prismaClient = new PrismaClient();
const listPostOfUserUseCase = new ListPostOfUserUseCase(prismaClient);
const listPostOfUserController = new ListPostOfUserController(listPostOfUserUseCase);
export { listPostOfUserController };
