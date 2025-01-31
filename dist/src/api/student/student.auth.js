"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAuth = void 0;
const auth_types_1 = require("../../auth/auth.types");
const auth_types_2 = require("../../auth/auth.types");
class StudentAuth {
}
exports.StudentAuth = StudentAuth;
_a = StudentAuth;
StudentAuth._baseContext = 'Student.Student';
StudentAuth.getProfile = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.GetProfile`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.GetOne });
StudentAuth.get = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.Get`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.GetMany });
StudentAuth.getById = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.GetById`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.GetOne });
StudentAuth.loginStudent = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.LoginStudent`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.CreateOne });
StudentAuth.create = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.Create`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.CreateOne });
StudentAuth.update = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.Update`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.UpdateOne });
StudentAuth.del = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.Delete`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.DeleteOne });
StudentAuth.upload = Object.assign(Object.assign({}, auth_types_1.DefaultAuthOptions), { Context: `${_a._baseContext}.Upload`, Ownership: auth_types_1.ResourceOwnership.Student, 
    // ActionScope    : ActionScope.System,
    RequestType: auth_types_2.RequestType.CreateOne });
//# sourceMappingURL=student.auth.js.map