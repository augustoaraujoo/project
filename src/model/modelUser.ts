import { v4 as uuid } from 'uuid'
class User {
    id!: string;
    admin!: boolean;
    name!: string;
    email!: string;
    password!: string;

    title!: string;
    description!: string;
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.admin = false;
            this.id = uuid();
        }
    }
}

export { User }