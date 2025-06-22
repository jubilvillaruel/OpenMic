/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, UseGuards } from '@nestjs/common';
import { Body, Get, Req } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { SignupDto } from './dto/signup.dto';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    // Endpoint for user login

    @Post('signup')
    signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto);
    }
    
    // Uses the LocalStrategy guard to validate user credentials
    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Req() req: Request) {
        return req.user; // Return the user information, which includes the token
    }


    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        console.log('inside authController status');
        // The user information is available in req.user due to JwtAuthGuard
        console.log('User information:', req.user);
        return req.user; // Return the user information
    }
}
