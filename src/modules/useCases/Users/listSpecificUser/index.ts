import { PrismaClient } from "@prisma/client";
import { ListSpecificUserUseCase } from "./ListSpecificUserUseCase";
import { ListSpecificUserController } from "./ListSpecificUserController";

const prismaClient = new PrismaClient();
const listSpecificUserUseCase = new ListSpecificUserUseCase(prismaClient);
const listSpecificUserController = new ListSpecificUserController(listSpecificUserUseCase);

export { listSpecificUserController };
