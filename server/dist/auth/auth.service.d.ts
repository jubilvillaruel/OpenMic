import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';
import { SignupDto } from './dto/signup.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    validateUser({ username, password, email }: AuthPayloadDto): {
        token: string;
        id: number;
        username: string;
        email: string;
    } | null;
    signup(signupDto: SignupDto): Promise<void>;
}
