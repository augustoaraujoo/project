import { PrismaClient } from '@prisma/client';
import { CreatePostUseCase } from './CreatePostUseCase'
import { CreatePostController } from './CreatePostController'

const prisma = new PrismaClient();
const createPostUseCase = new CreatePostUseCase(prisma);

const createPostController = new CreatePostController(createPostUseCase);
export { createPostController}