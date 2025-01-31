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
exports.AddressValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const error_handler_1 = require("../../common/handlers/error.handler");
class AddressValidator {
    static validateCreateRequest(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    city: joi_1.default.string().min(2).max(15).required(),
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
                    city: joi_1.default.string().min(2).max(15),
                });
                return yield schema.validateAsync(requestBody);
            }
            catch (error) {
                error_handler_1.ErrorHandler.handleValidationError(error);
            }
        });
    }
}
exports.AddressValidator = AddressValidator;
//# sourceMappingURL=address.validator.js.map