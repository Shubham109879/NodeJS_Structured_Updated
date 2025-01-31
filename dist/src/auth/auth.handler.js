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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.AuthHandler = void 0;
const response_handler_1 = require("../common/handlers/response.handler");
const injector_1 = require("../startup/injector");
// import { Authenticator } from "./authenticator";
const student_authenticator_1 = require("./wrappers/student.authenticator");
const student_authorizer_1 = require("./wrappers/student.authorizer");
class AuthHandler {
}
exports.AuthHandler = AuthHandler;
_a = AuthHandler;
AuthHandler.handle = (options) => {
    var middlewares = [];
    //Set context
    var contextSetter = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        request.context = options.Context;
        const tokens = options.Context.split('.');
        if (tokens.length < 2) {
            response_handler_1.ResponseHandler.failure(request, response, 'Invalid request context', 400);
            return;
        }
        // const resourceIdIdentifier = options.ResourceIdName ? options.ResourceIdName.toString() : null;
        request.context = options.Context;
        request.requestType = options.RequestType;
        request.ownership = options.Ownership;
        next();
    });
    middlewares.push(contextSetter);
    // const studentResource = options.Ownership === ResourceOwnership.Student;
    const isLogin = options.Context === "Student.Student.LoginStudent";
    console.log(isLogin);
    if (isLogin) {
        return middlewares;
    }
    var authenticator = injector_1.Injector.Container.resolve(student_authenticator_1.StudentAuthenticator);
    middlewares.push(authenticator.authenticateUser);
    var authorizer = injector_1.Injector.Container.resolve(student_authorizer_1.StudentAuthorizer);
    middlewares.push(authorizer.authorize);
    return middlewares;
};
exports.auth = AuthHandler.handle;
//# sourceMappingURL=auth.handler.js.map