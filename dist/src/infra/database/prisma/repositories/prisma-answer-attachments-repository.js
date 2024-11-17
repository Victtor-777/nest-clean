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
exports.PrismaAnswerAttachmentRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_answer_attachment_mapper_1 = require("../mappers/prisma-answer-attachment-mapper");
let PrismaAnswerAttachmentRepository = class PrismaAnswerAttachmentRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findManyByAnswerId(answerId) {
        const answerAttachments = await this.prisma.attachment.findMany({
            where: {
                answerId,
            },
        });
        return answerAttachments.map(prisma_answer_attachment_mapper_1.PrismaAnswerAttachmentMapper.toDomain);
    }
    async deleteManyByAnswerId(answerId) {
        await this.prisma.attachment.deleteMany({
            where: {
                answerId,
            },
        });
    }
};
exports.PrismaAnswerAttachmentRepository = PrismaAnswerAttachmentRepository;
exports.PrismaAnswerAttachmentRepository = PrismaAnswerAttachmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAnswerAttachmentRepository);
//# sourceMappingURL=prisma-answer-attachments-repository.js.map