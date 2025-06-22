"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
const bcrypt = require("bcrypt");
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
];
let AuthService = class AuthService {
    userModel;
    jwtService;
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    validateUser({ username, password, email }) {
        const findUser = fakeUser.find((user) => user.username === username);
        if (!findUser) {
            return null;
        }
        if (password === findUser.password && email === findUser.email) {
            const { password, ...user } = findUser;
            const token = this.jwtService.sign(user);
            return { ...user, token };
        }
        return null;
    }
    async signup(signupDto) {
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
            profileCompleted: false,
            createdAt: Date.now(),
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map