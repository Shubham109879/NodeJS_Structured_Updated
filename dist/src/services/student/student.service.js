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
exports.StudentService = void 0;
const tsyringe_1 = require("tsyringe");
const student_mapper_js_1 = require("../../mapper/student.mapper.js");
// import { IAuthenticator } from "../../auth/authenticator.interface.js";
let StudentService = class StudentService {
    constructor(_studentRepo) {
        this._studentRepo = _studentRepo;
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            // let student={
            //   Name:"Sam",
            //   Age: 35,
            // };
            const student = yield this._studentRepo.getStudentById(id);
            return student_mapper_js_1.StudentMapper.toDto(student);
        });
        this.getStudents = (req) => __awaiter(this, void 0, void 0, function* () {
            const students = yield this._studentRepo.getStudents(req);
            return student_mapper_js_1.StudentMapper.toArrayDto(students);
        });
        this.loginStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const students = yield this._studentRepo.loginStudent(req);
            return students;
        });
        this.getProfile = (req) => __awaiter(this, void 0, void 0, function* () {
            const students = yield this._studentRepo.getProfile(req);
            return student_mapper_js_1.StudentMapper.toDto(students);
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this._studentRepo.createStudent(req);
            return student_mapper_js_1.StudentMapper.toDto(student);
        });
        this.updateStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this._studentRepo.updateStudent(req);
            return student_mapper_js_1.StudentMapper.toDto(student);
        });
        this.deleteStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield this._studentRepo.deleteStudent(req);
            return student_mapper_js_1.StudentMapper.toDto(student);
        });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('IStudentRepo')),
    __metadata("design:paramtypes", [Object])
], StudentService);
//# sourceMappingURL=student.service.js.map