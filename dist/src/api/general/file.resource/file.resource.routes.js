"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const express_1 = __importDefault(require("express"));
const file_upload_middleware_1 = require("../../../middlewares/file.upload.middleware");
const file_resource_controller_1 = require("./file.resource.controller");
const register = (app) => {
    const router = express_1.default.Router();
    (0, file_upload_middleware_1.fileUploadMiddleware)(router);
    const controller = new file_resource_controller_1.FileResourceController();
    router.post("/upload", controller.upload);
    router.get("/download", controller.download);
    app.use("/api/v1/file-resources", router);
};
exports.register = register;
//# sourceMappingURL=file.resource.routes.js.map