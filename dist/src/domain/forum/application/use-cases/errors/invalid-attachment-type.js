"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidAttachmentType = void 0;
class InvalidAttachmentType extends Error {
    constructor(type) {
        super(`File type "${type}" is not valid.`);
    }
}
exports.InvalidAttachmentType = InvalidAttachmentType;
//# sourceMappingURL=invalid-attachment-type.js.map