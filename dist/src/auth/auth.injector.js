"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInjector = void 0;
require("reflect-metadata");
const custom_student_authenticator_1 = require("./custom/custom.student.authenticator");
const custom_student_authorizer_1 = require("./custom/custom.student.authorizer");
class AuthInjector {
    static registerInjections(container) {
        // container.register('IAuthenticator', StudentAuthenticator);
        container.register('IStudentAuthenticator', custom_student_authenticator_1.CustomStudentAuthenticator);
        container.register('IStudentAuthorizer', custom_student_authorizer_1.CustomStudentAuthorizer);
    }
}
exports.AuthInjector = AuthInjector;
//# sourceMappingURL=auth.injector.js.map