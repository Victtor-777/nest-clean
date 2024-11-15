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
exports.PrismaQuestionsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_question_mapper_1 = require("../mappers/prisma-question-mapper");
let PrismaQuestionsRepository = class PrismaQuestionsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const question = await this.prisma.question.findUnique({
            where: {
                id,
            },
        });
        if (!question) {
            return null;
        }
        return prisma_question_mapper_1.PrismaQuestionMapper.toDomain(question);
    }
    findBySlug(slug) {
        throw new Error('Method not implemented.');
    }
    findManyRecent(params) {
        throw new Error('Method not implemented.');
    }
    save(question) {
        throw new Error('Method not implemented.');
    }
    create(question) {
        throw new Error('Method not implemented.');
    }
    delete(question) {
        throw new Error('Method not implemented.');
    }
};
exports.PrismaQuestionsRepository = PrismaQuestionsRepository;
exports.PrismaQuestionsRepository = PrismaQuestionsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaQuestionsRepository);
//# sourceMappingURL=prisma-questions-repository.js.map