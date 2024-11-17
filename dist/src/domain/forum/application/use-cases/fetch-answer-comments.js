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
exports.FetchAnswerCommentsUseCase = void 0;
const answer_comments_repository_1 = require("../repositories/answer-comments-repository");
const either_1 = require("../../../../core/either");
const common_1 = require("@nestjs/common");
let FetchAnswerCommentsUseCase = class FetchAnswerCommentsUseCase {
    constructor(answerCommentsRepository) {
        this.answerCommentsRepository = answerCommentsRepository;
    }
    async execute({ answerId, page, }) {
        const answerComments = await this.answerCommentsRepository.findManyByAnswerId(answerId, {
            page,
        });
        return (0, either_1.right)({
            answerComments,
        });
    }
};
exports.FetchAnswerCommentsUseCase = FetchAnswerCommentsUseCase;
exports.FetchAnswerCommentsUseCase = FetchAnswerCommentsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answer_comments_repository_1.AnswerCommentsRepository])
], FetchAnswerCommentsUseCase);
//# sourceMappingURL=fetch-answer-comments.js.map