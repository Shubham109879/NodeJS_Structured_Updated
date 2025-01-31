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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepo = void 0;
const student_model_js_1 = require("../../models/student.model.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class StudentRepo {
    constructor() {
        // constructor(@inject('IAuthenticator') private _studAuth: IAuthenticator){
        // }
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.findByPk(id);
            return student;
        });
        this.getStudents = (req) => __awaiter(this, void 0, void 0, function* () {
            const students = yield student_model_js_1.Student.findAll({});
            return students;
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.create({
                name: req.body.name,
                age: parseInt(req.body.age),
                password: req.body.password
            });
            return student;
        });
        this.updateStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.findByPk(req.params.id);
            if (student != null) {
                student.set("name", req.body.name);
                student.set("age", req.body.age);
                student.set("password", req.body.password);
                yield student.save();
            }
            return student;
        });
        this.deleteStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.destroy({
                where: {
                    id: req.params.id,
                }
            });
            return student;
        });
        this.getProfile = (req) => __awaiter(this, void 0, void 0, function* () {
            // console.log(parseInt((req as any).payload.id));
            // const id=Number(req.payload.id);
            const student = yield student_model_js_1.Student.findOne({
                where: {
                    name: req.payload.name
                }
            });
            //   if (isNaN(id)) {
            //     throw new Error('Invalid student ID');
            // }
            return student;
        });
        this.loginStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            //   const payload={
            //     email: req.body.email
            // };
            const student = yield student_model_js_1.Student.findOne({
                where: {
                    name: req.body.name,
                    password: req.body.password
                }
            });
            console.log(student);
            if (student != null) {
                const payload = {
                    id: student.get("id"),
                    roles: "student",
                    // roles: "admin",
                };
                let token = this.createJwtToken(payload);
                console.log(token);
                return {
                    Message: "Login Successful",
                    Token: token
                };
            }
            else {
                return "Invalid username or password";
            }
        });
        this.createJwtToken = (student) => {
            try {
                const token = jsonwebtoken_1.default.sign(student, "MySecretKey", // Secret key
                { expiresIn: '2h' } // Token expiration (e.g., 2 hours)
                );
                return token;
            }
            catch (error) {
                console.error('Error creating JWT token:', error);
                throw new Error('Failed to create token');
            }
        };
    }
}
exports.StudentRepo = StudentRepo;
//# sourceMappingURL=student.repo.js.map