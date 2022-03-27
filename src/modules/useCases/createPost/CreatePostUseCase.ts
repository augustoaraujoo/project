import { PrismaClient } from "@prisma/client";

interface IRequest {
    id: string;
    title: string;
    description: string;
}
class CreatePostUseCase {
    constructor(private prisma: PrismaClient) {}
    async execute({ id, title, description }: IRequest) {
        const createPost = await this.prisma.post.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        id,
                    },
                },
            },
        });
        return createPost;
    }
}
export { CreatePostUseCase };
