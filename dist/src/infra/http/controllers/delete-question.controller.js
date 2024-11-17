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
exports.DeleteQuestionController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../auth/current-user-decorator");
const delete_question_1 = require("../../../domain/forum/application/use-cases/delete-question");
let DeleteQuestionController = class DeleteQuestionController {
    constructor(deleteQuestion) {
        this.deleteQuestion = deleteQuestion;
    }
    async handle(user, questionId) {
        const userId = user.sub;
        const result = await this.deleteQuestion.execute({
            questionId,
            authorId: userId,
        });
        if (result.isLeft()) {
            throw new common_1.BadRequestException();
        }
    }
};
exports.DeleteQuestionController = DeleteQuestionController;
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(204),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DeleteQuestionController.prototype, "handle", null);
exports.DeleteQuestionController = DeleteQuestionController = __decorate([
    (0, common_1.Controller)('/questions/:id'),
    __metadata("design:paramtypes", [delete_question_1.DeleteQuestionUseCase])
], DeleteQuestionController);
//# sourceMappingURL=delete-question.controller.js.map