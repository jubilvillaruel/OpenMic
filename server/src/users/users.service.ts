import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}


    //creates a new user
    createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    //gets all users
    async getUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    //gets a user by id
    async getUserById(id: string){
        return this.userModel.findById(id).exec();
    }

    //updates the user
    async updateUser(id: string, updateUserDto: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}).exec();
    }

    //deletes the user
    async deleteUser(id: string){
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
