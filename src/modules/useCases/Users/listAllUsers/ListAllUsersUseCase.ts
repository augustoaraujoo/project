import { PrismaClient } from '@prisma/client';
class ListAllUsersUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute() {

        const listAllUsers = await this.prismaClient.user.findMany();
        return listAllUsers;
    }

}

export { ListAllUsersUseCase }