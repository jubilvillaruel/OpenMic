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
exports.GigsController = void 0;
const common_1 = require("@nestjs/common");
const gigs_service_1 = require("./gigs.service");
const CreateGig_dto_1 = require("./dto/CreateGig.dto");
const mongoose_1 = require("mongoose");
const UpdateGig_dto_1 = require("./dto/UpdateGig.dto");
let GigsController = class GigsController {
    gigsService;
    constructor(gigsService) {
        this.gigsService = gigsService;
    }
    createGigs(createGigDto) {
        return this.gigsService.createGig(createGigDto);
    }
    getGigs() {
        return this.gigsService.getGigs();
    }
    async getGigById(id) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        const findGig = await this.gigsService.getGigById(id);
        if (!findGig) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        return findGig;
    }
    async updateGig(id, updateGigDto) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        const updateGig = await this.gigsService.updateGig(id, updateGigDto);
        if (!updateGig) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        return updateGig;
    }
    async deleteGig(id) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        const deleteGig = await this.gigsService.deleteGig(id);
        if (!deleteGig) {
            throw new common_1.HttpException('Gig not found', 404);
        }
        return deleteGig;
    }
};
exports.GigsController = GigsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateGig_dto_1.CreateGigDto]),
    __metadata("design:returntype", void 0)
], GigsController.prototype, "createGigs", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GigsController.prototype, "getGigs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GigsController.prototype, "getGigById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateGig_dto_1.UpdateGigDto]),
    __metadata("design:returntype", Promise)
], GigsController.prototype, "updateGig", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GigsController.prototype, "deleteGig", null);
exports.GigsController = GigsController = __decorate([
    (0, common_1.Controller)('gigs'),
    __metadata("design:paramtypes", [gigs_service_1.GigsService])
], GigsController);
//# sourceMappingURL=gigs.controller.js.map