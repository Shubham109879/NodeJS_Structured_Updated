"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_js_1 = require("../../services/student/student.service.js");
const response_handler_js_1 = require("../../common/handlers/response.handler.js");
const error_handler_js_1 = require("../../common/handlers/error.handler.js");
const api_error_js_1 = require("../../common/api.error.js");
const injector_js_1 = require("../../startup/injector.js");
const student_validator_js_1 = require("./student.validator.js");
class StudentController {
    constructor() {
        //   service: StudentService=null;
        // constructor(){
        //    this.service=new StudentService();
        // }
        this._service = injector_js_1.Injector.Container.resolve(student_service_js_1.StudentService);
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let student = yield this._service.getStudentById(parseInt(req.params.id));
                if (student === null) {
                    error_handler_js_1.ErrorHandler.throwNotFoundError("User Not Found");
                }
                const message = "Successfully received user information";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                let students = yield this._service.getStudents(req);
                if (students === null) {
                    error_handler_js_1.ErrorHandler.throwNotFoundError("User Not Found");
                }
                const message = "Successfully received user information";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, students);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.getProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                console.log(req.payload.id);
                let students = yield this._service.getStudentById(req.payload.id);
                if (students === null) {
                    error_handler_js_1.ErrorHandler.throwNotFoundError("User Not Found");
                }
                const message = "User Profile generated Successfully, Authorization Successful";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, students);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.loginStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this._service.loginStudent(req);
                if (student == null || student === "Invalid username or password") {
                    throw new api_error_js_1.ApiError("Unable to login!", 400);
                }
                const message = "Student successfully Logged In";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield student_validator_js_1.StudentValidator.validateCreateRequest(req.body);
                const student = yield this._service.createStudent(req);
                if (student === null) {
                    throw new api_error_js_1.ApiError("Unable to create User!", 400);
                }
                const message = "User created  successfully";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const isPresent = yield this._service.getStudentById(parseInt(req.params.id));
                if (isPresent === null) {
                    error_handler_js_1.ErrorHandler.throwNotFoundError(`User with Id ${req.params.id} not found`);
                }
                yield student_validator_js_1.StudentValidator.validateUpdateRequest(req.body);
                const updateModel = this.getUpdateModel(req.body);
                const student = yield this._service.updateStudent(req);
                response_handler_js_1.ResponseHandler.success(req, res, "Successfully updated...", 200, student);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.del = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const isPresent = yield this._service.getStudentById(id);
                console.log(isPresent);
                if (isPresent === null) {
                    error_handler_js_1.ErrorHandler.throwNotFoundError(`Student with Id ${req.params.id} not found`);
                }
                const student = yield this._service.deleteStudent(req);
                const message = "Student record deleted successfully";
                response_handler_js_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_js_1.ResponseHandler.handleError(req, res, error);
            }
        });
    }
    getUpdateModel(requestBody) {
        const model = {
            name: requestBody.name,
            age: requestBody.age ? parseInt(requestBody.age) : undefined,
        };
        return model;
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map