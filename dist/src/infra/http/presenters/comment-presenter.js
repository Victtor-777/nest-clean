"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentPresenter = void 0;
class CommentPresenter {
    static toHTTP(comment) {
        return {
            id: comment.id.toString(),
            content: comment.content,
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
        };
    }
}
exports.CommentPresenter = CommentPresenter;
//# sourceMappingURL=comment-presenter.js.map