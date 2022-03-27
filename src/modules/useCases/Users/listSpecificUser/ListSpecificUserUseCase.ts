import { PrismaClient } from "@prisma/client";

interface IRequest {
    id: string;
}

class ListSpecificUserUseCase {
    constructor(private prismaClient: PrismaClient) {}
    async execute({ id }: IRequest) {
        const listSpecificUser = await this.prismaClient.user.findUnique({
            rejectOnNotFound: true,
            where: {
                id: id,
            },
        });
        return listSpecificUser;
    }
}

export { ListSpecificUserUseCase };
