"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudent = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
// import { authorization } from "./authorization";
// import { checkRoles } from "./authorization";
const student_auth_1 = require("./student.auth");
const auth_handler_1 = require("../../auth/auth.handler");
// import { Loader } from "../../startup/loader";
// import dotenv from "dotenv";
// dotenv.config();
const registerStudent = (app) => {
    const studentRouter = express_1.default.Router();
    // const authenticator=Loader.Authenticator;
    // console.log(studentRouter);
    const controller = new student_controller_1.StudentController();
    // studentRouter.get('/:id',controller.getById);
    studentRouter.get('/all', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.get), controller.get);
    // studentRouter.get('/profile',authorization,controller.getProfile);
    // studentRouter.get('/profile',authorization,checkRoles(["student"]),controller.getProfile);
    studentRouter.get('/profile', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.getProfile), controller.getProfile);
    studentRouter.get('/:id', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.getById), controller.getById);
    studentRouter.post('/login', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.loginStudent), controller.loginStudent);
    // studentRouter.get('/getProfile',authenticator.authenticateUser,controller.getProfile);
    studentRouter.post('/', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.create), controller.create);
    studentRouter.put('/:id', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.update), controller.update);
    studentRouter.delete('/:id', (0, auth_handler_1.auth)(student_auth_1.StudentAuth.del), controller.del);
    app.use(express_1.default.json());
    app.use('/api/v1/student', studentRouter);
};
exports.registerStudent = registerStudent;
//# sourceMappingURL=student.route.js.map