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
exports.StudentValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/handlers/error.handler");
class StudentValidator {
    static validateCreateRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    name: joi_1.default.string().min(2).max(15).required(),
                    age: joi_1.default.number().integer().min(20).required(),
                    password: joi_1.default.string()
                        .regex(/.*\d.*/) // At least one digit in any position
                        .regex(/.*[a-zA-Z].*/) // At least one letter in any position
                        .regex(/.*[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/) // At least one special character
                        .min(4) // Minimum length of 4 characters
                        .required() // Password is required
                        .messages({
                        "string.pattern.base": "Password must include at least one letter, one digit, and one special character.",
                        "string.min": "Password must be at least 4 characters long.",
                    }),
                });
                return yield schema.validateAsync(requestBody);
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
    static validateUpdateRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    name: joi_1.default.string().min(2).max(15),
                    age: joi_1.default.number().integer().min(20),
                });
                return yield schema.validateAsync(requestBody);
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.StudentValidator = StudentValidator;
//# sourceMappingURL=student.validator.js.map