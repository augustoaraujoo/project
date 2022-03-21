import { PrismaClient } from "@prisma/client"

interface IRequest {
    name: string,
    email: string,
    password: string
}
class CreateUserUseCase {

    constructor(private prisma: PrismaClient) { }

    async execute({ name, email, password }: IRequest) {

        const createUser = await this.prisma.user.create({

            data: {
                name,
                email,
                password
            }
        })
        return createUser
    }
}

export { CreateUserUseCase }