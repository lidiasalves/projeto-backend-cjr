"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaModule = void 0;
const common_1 = require("@nestjs/common");
const lojas_service_1 = require("../lojas/lojas.service");
const loja_controller_1 = require("./loja.controller");
const prisma_service_1 = require("../database/prisma.service");
const prisma_module_1 = require("../database/prisma.module");
let LojaModule = class LojaModule {
};
exports.LojaModule = LojaModule;
exports.LojaModule = LojaModule = __decorate([
    (0, common_1.Module)({
        providers: [lojas_service_1.LojasService, prisma_service_1.PrismaService],
        controllers: [loja_controller_1.LojaController],
        imports: [prisma_module_1.PrismaModule],
    })
], LojaModule);
//# sourceMappingURL=loja.module.js.map