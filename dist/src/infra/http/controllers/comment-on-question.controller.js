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
exports.CommentOnQuestionController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../auth/current-user-decorator");
const zod_validation_pipe_1 = require("../pipes/zod-validation-pipe");
const zod_1 = require("zod");
const comment_on_question_1 = require("../../../domain/forum/application/use-cases/comment-on-question");
const commentOnQuestionBodySchema = zod_1.z.object({
    content: zod_1.z.string(),
});
const bodyValidationPipe = new zod_validation_pipe_1.ZodValidationPipe(commentOnQuestionBodySchema);
let CommentOnQuestionController = class CommentOnQuestionController {
    constructor(commentOnQuestion) {
        this.commentOnQuestion = commentOnQuestion;
    }
    async handle(body, user, questionId) {
        const { content } = body;
        const userId = user.sub;
        const result = await this.commentOnQuestion.execute({
            content,
            questionId,
            authorId: userId,
        });
        if (result.isLeft()) {
            throw new common_1.BadRequestException();
        }
    }
};
exports.CommentOnQuestionController = CommentOnQuestionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(bodyValidationPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Param)('questionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CommentOnQuestionController.prototype, "handle", null);
exports.CommentOnQuestionController = CommentOnQuestionController = __decorate([
    (0, common_1.Controller)('/questions/:questionId/comments'),
    __metadata("design:paramtypes", [comment_on_question_1.CommentOnQuestionUseCase])
], CommentOnQuestionController);
//# sourceMappingURL=comment-on-question.controller.js.map