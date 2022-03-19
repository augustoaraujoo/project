import { User } from "../../../model/modelUser";
import { IUsersRepository, ICreateUserDTO } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }
    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }
    
    createNewUser({ name, email, password }: ICreateUserDTO): User {
        throw new Error("Method not implemented.");
    }
    findByID(id: string): User | undefined {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): User | undefined {
        throw new Error("Method not implemented.");
    }
    turnUserAdmin(user: User): User {
        throw new Error("Method not implemented.");
    }
    listUsers(): User[] {
        throw new Error("Method not implemented.");
    }

}
export { UsersRepository }