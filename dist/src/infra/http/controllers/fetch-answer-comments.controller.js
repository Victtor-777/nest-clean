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
exports.FetchAnswerCommentsController = void 0;
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../pipes/zod-validation-pipe");
const zod_1 = require("zod");
const comment_presenter_1 = require("../presenters/comment-presenter");
const fetch_answer_comments_1 = require("../../../domain/forum/application/use-cases/fetch-answer-comments");
const pageQueryParamSchema = zod_1.z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(zod_1.z.number().min(1));
const queryValidationPipe = new zod_validation_pipe_1.ZodValidationPipe(pageQueryParamSchema);
let FetchAnswerCommentsController = class FetchAnswerCommentsController {
    constructor(fetchAnswerComments) {
        this.fetchAnswerComments = fetchAnswerComments;
    }
    async handle(page, answerId) {
        const result = await this.fetchAnswerComments.execute({
            page,
            answerId,
        });
        if (result.isLeft()) {
            throw new common_1.BadRequestException();
        }
        const answerComments = result.value.answerComments;
        return { comments: answerComments.map(comment_presenter_1.CommentPresenter.toHTTP) };
    }
};
exports.FetchAnswerCommentsController = FetchAnswerCommentsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', queryValidationPipe)),
    __param(1, (0, common_1.Param)('answerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], FetchAnswerCommentsController.prototype, "handle", null);
exports.FetchAnswerCommentsController = FetchAnswerCommentsController = __decorate([
    (0, common_1.Controller)('/answers/:answerId/comments'),
    __metadata("design:paramtypes", [fetch_answer_comments_1.FetchAnswerCommentsUseCase])
], FetchAnswerCommentsController);
//# sourceMappingURL=fetch-answer-comments.controller.js.map