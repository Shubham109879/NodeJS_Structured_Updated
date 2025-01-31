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
exports.CustomStudentAuthorizer = void 0;
const injector_1 = require("../../startup/injector");
const student_service_1 = require("../../services/student/student.service");
// import { RolePrivilegeService } from '../../services/role/role.privilege.service';
const permission_handler_1 = require("./permission.handler");
//////////////////////////////////////////////////////////////
class CustomStudentAuthorizer {
    constructor() {
        this._studentService = null;
        this._rolePrivilegeService = null;
        this.authorize = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                const context = request.context;
                if (context == null || context === 'undefined') {
                    return false;
                }
                const permissionRes = yield permission_handler_1.PermissionHandler.addRoleBasedPermissions(request);
                return permissionRes;
            }
            catch (error) {
                // Logger.instance().log(error.message);
                console.log(error.message);
            }
            return false;
        });
        this._studentService = injector_1.Injector.Container.resolve(student_service_1.StudentService);
    }
}
exports.CustomStudentAuthorizer = CustomStudentAuthorizer;
//# sourceMappingURL=custom.student.authorizer.js.map