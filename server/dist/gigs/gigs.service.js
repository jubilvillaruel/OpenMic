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
exports.GigsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gig_schema_1 = require("./schemas/gig.schema");
let GigsService = class GigsService {
    gigModel;
    constructor(gigModel) {
        this.gigModel = gigModel;
    }
    createGig(createGigDto) {
        const newGig = new this.gigModel(createGigDto);
        return newGig.save();
    }
    async getGigs() {
        return this.gigModel.find().exec();
    }
    async getGigById(id) {
        return this.gigModel.findById(id).exec();
    }
    async updateGig(id, updateGigDto) {
        return this.gigModel.findByIdAndUpdate(id, updateGigDto, { new: true }).exec();
    }
    async deleteGig(id) {
        return this.gigModel.findByIdAndDelete(id).exec();
    }
};
exports.GigsService = GigsService;
exports.GigsService = GigsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gig_schema_1.Gig.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GigsService);
//# sourceMappingURL=gigs.service.js.map