"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploadMiddleware = void 0;
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const fileUploadMiddleware = (router) => {
    const MAX_UPLOAD_FILE_SIZE = 104857600;
    router.use((0, express_fileupload_1.default)({
        limits: { fileSize: MAX_UPLOAD_FILE_SIZE },
        preserveExtension: true,
        createParentPath: true,
        parseNested: true,
        useTempFiles: true,
        tempFileDir: '/tmp/uploads/'
    }));
};
exports.fileUploadMiddleware = fileUploadMiddleware;
//# sourceMappingURL=file.upload.middleware.js.map