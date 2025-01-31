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
exports.checkRoles = void 0;
exports.authorization = authorization;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_handler_1 = require("../../common/handlers/response.handler");
function authorization(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Authorization entered");
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            console.log(`Token Generated: ${token}`);
            if (token === null || token === 'null' || token === undefined) {
                response_handler_1.ResponseHandler.failure(req, res, "Token is null or undefined so Authorization failed", 401);
            }
            const payload = jsonwebtoken_1.default.verify(token, "MySecretKey");
            console.log(payload);
            req.payload = payload;
            req.payload.id = payload.id;
            req.payload.roles = payload.roles;
            console.log(req.payload.id);
            console.log(req.payload.roles);
            console.log(payload.iat);
            console.log(payload.exp);
            next();
        }
        catch (error) {
            response_handler_1.ResponseHandler.handleError(req, res, error);
        }
    });
}
const checkRoles = (roles) => {
    return (req, res, next) => {
        try {
            const userRole = req.payload.roles;
            if (!userRole) {
                const msg = "Forbidden: User role is undefined.";
                return response_handler_1.ResponseHandler.failure(req, res, msg, 403);
            }
            if (!roles.includes(userRole)) {
                const msg = `Forbidden: Insufficient permissions. Required roles: ${roles.join(", ")}`;
                return response_handler_1.ResponseHandler.failure(req, res, msg, 403);
            }
            // If role is valid, proceed to the next middleware/route handler
            next();
        }
        catch (error) {
            const msg = "An error occurred while checking roles.";
            return response_handler_1.ResponseHandler.failure(req, res, msg, 500);
        }
    };
};
exports.checkRoles = checkRoles;
//# sourceMappingURL=authorization.js.map