import { User } from "../../model/modelUser";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IUsersRepository {
    createNewUser({ name, email, password }: ICreateUserDTO): User;
    findByID(id: string): User | undefined;
    findByEmail(email: string): User | undefined;
    turnUserAdmin(user: User): User;
    listUsers(): User[];
}

export { ICreateUserDTO, IUsersRepository };
