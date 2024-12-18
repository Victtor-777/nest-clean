"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnswerMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const answer_1 = require("../../../../domain/forum/enterprise/entities/answer");
class PrismaAnswerMapper {
    static toDomain(raw) {
        return answer_1.Answer.create({
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
            createdAt: raw.createdAt,
            updatedAt: raw.updateAt,
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
    static toPrisma(answer) {
        return {
            id: answer.id.toString(),
            authorId: answer.authorId.toString(),
            questionId: answer.questionId.toString(),
            content: answer.content,
            createdAt: answer.createdAt,
            updateAt: answer.updatedAt,
        };
    }
}
exports.PrismaAnswerMapper = PrismaAnswerMapper;
//# sourceMappingURL=prisma-answer-mapper.js.map