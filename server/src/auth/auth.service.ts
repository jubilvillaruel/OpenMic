/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User} from '../users/schemas/user.schema';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';


   const fakeUser = [
    {
            id: 1,
            username: 'testuser',
            password: 'testpassword',
            email: 'testuser@example.com'
        },
        {
            id: 2,
            username: 'anotheruser',
            password: 'anotherpassword',
            email: 'anotheruser@example.com'
        },
        {
            id: 3,
            username: 'admin',
            password: 'adminpassword',
            email: 'admin@example.com'
        }
    
    ]


@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

    validateUser({username, password, email}: AuthPayloadDto) {
    const findUser = fakeUser.find((user) => user.username === username);
    if (!findUser) {
        return null;
    }
    if (password === findUser.password && email === findUser.email) {
        const { password, ...user } = findUser;
        const token = this.jwtService.sign(user);
        return { ...user, token }; // Return user info and token
    }
    return null; // Return null if password does not match
    }


    async signup(signupDto: SignupDto){
        //const newUser = new this.userModel(signupDto);
        //return newUser.save();
        const { username, password, email, role } = signupDto;
        const emailExists = await this.userModel.findOne({ 
            email
        });
        if (emailExists) {
            throw new Error('Email already exists');
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await this.userModel.create({
            username,
            email,
            password: hashPassword,
            role,
            profileCompleted: false, // Default value for profileCompleted
            createdAt: Date.now(),
        });
    }
}


