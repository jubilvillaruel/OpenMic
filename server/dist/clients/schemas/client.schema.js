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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = exports.Client = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Client = class Client extends mongoose_2.Document {
    email;
    username;
    password;
    role;
    profileCompleted;
    createdAt;
};
exports.Client = Client;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, match: /^\S+@\S+\.\S+$/ }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Client.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: 8 }),
    __metadata("design:type", String)
], Client.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['client'] }),
    __metadata("design:type", String)
], Client.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Client.prototype, "profileCompleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
exports.Client = Client = __decorate([
    (0, mongoose_1.Schema)()
], Client);
exports.ClientSchema = mongoose_1.SchemaFactory.createForClass(Client);
//# sourceMappingURL=client.schema.js.map