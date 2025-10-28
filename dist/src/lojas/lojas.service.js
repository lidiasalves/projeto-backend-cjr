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
exports.LojasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let LojasService = class LojasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.loja.create({ data });
    }
    async findAll() {
        return this.prisma.loja.findMany();
    }
    async update(id, data) {
        const lojaExists = await this.prisma.loja.findUnique({
            where: {
                id,
            }
        });
        if (!lojaExists) {
            throw new common_1.NotFoundException('Loja não encontrada.');
        }
        await this.prisma.loja.update({
            data,
            where: {
                id,
            }
        });
    }
    async delete(id) {
        const lojaExists = await this.prisma.loja.findUnique({
            where: {
                id,
            }
        });
        if (!lojaExists) {
            throw new Error('Loja não encontrada.');
        }
        return await this.prisma.loja.delete({
            where: {
                id,
            }
        });
    }
    async getById(id) {
        const lojaExists = await this.prisma.loja.findUnique({
            where: {
                id,
            }
        });
        if (!lojaExists) {
            throw new Error('Loja não encontrada.');
        }
        return lojaExists;
    }
};
exports.LojasService = LojasService;
exports.LojasService = LojasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LojasService);
//# sourceMappingURL=lojas.service.js.map