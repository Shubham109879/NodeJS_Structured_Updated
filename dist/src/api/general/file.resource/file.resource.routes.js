"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const express_1 = __importDefault(require("express"));
const file_upload_middleware_1 = require("../../../middlewares/file.upload.middleware");
const file_resource_controller_1 = require("./file.resource.controller");
const student_auth_1 = require("../../student/student.auth");
const auth_handler_1 = require("../../../auth/auth.handler");
const student_controller_1 = require("../../student/student.controller");
const register = (app) => {
    const router = express_1.default.Router();
    (0, file_upload_middleware_1.fileUploadMiddleware)(router);
    const controller = new file_resource_controller_1.FileResourceController();
    const studentController = new student_controller_1.StudentController();
    router.post("/login", (0, auth_handler_1.auth)(student_auth_1.StudentAuth.loginStudent), studentController.loginStudent);
    router.post("/upload", (0, auth_handler_1.auth)(student_auth_1.StudentAuth.upload), controller.upload);
    router.get("/download", controller.download);
    app.use("/api/v1/file-resources", router);
};
exports.register = register;
//# sourceMappingURL=file.resource.routes.js.map