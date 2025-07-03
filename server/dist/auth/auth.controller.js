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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const auth_dto_1 = require("./dto/auth.dto");
const auth_service_1 = require("./auth.service");
const jwt_guard_1 = require("./guards/jwt.guard");
const signup_dto_1 = require("./dto/signup.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    async login(authPayload) {
        const user = await this.authService.validateUser(authPayload);
        if (!user) {
            throw new common_2.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
    status(req) {
        console.log('inside authController status');
        console.log('User information:', req.user);
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthPayloadDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_2.Get)('status'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "status", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map