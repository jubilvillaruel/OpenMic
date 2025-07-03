/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string, email: string) {
        const user = await this.authService.validateUser({ username, password, email });
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }

}
