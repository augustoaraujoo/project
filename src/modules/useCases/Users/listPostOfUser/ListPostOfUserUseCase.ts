import { PrismaClient } from "@prisma/client";

class ListPostOfUserUseCase {
    constructor(private prismaClient: PrismaClient) {}
    async execute() {
        const listUserIfHavePost = await this.prismaClient.user.findMany({
            include: {
                posts: true,
            },
        });
        if (listUserIfHavePost) {
            const list = await this.prismaClient.user.findMany({
                select: {
                    id: true,
                    name: true,
                    posts: true,
                },
            });
            return list;
        }
    }
}
export { ListPostOfUserUseCase };
