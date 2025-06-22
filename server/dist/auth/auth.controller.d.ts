import { AuthService } from './auth.service';
import { Request } from 'express';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<void>;
    login(req: Request): Express.User | undefined;
    status(req: Request): Express.User | undefined;
}
