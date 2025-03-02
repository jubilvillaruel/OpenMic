import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
