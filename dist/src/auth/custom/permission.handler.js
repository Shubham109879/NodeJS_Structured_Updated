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
exports.PermissionHandler = void 0;
////////////////////////////////////////////////////////////////////////////////////////
class PermissionHandler {
}
exports.PermissionHandler = PermissionHandler;
_a = PermissionHandler;
PermissionHandler.addRoleBasedPermissions = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const context = request.context;
    const ownership = request.ownership;
    const requestType = request.requestType;
    const roleName = request.payload.roles;
    // if(roleName==="student" || roleName==="admin")
    // {
    //     request.context=context;
    //     request.requestType=requestType;
    //     return true;
    // } 
    if (roleName === "student") {
        if (context === "Student.Student.Get") {
            request.message = "Error: User Role is Student so unable to access All Students Data";
            return false;
        }
        if (context === "Student.Student.GetById") {
            request.message = "Error: User Role is Student so unable to get Distinct Student Data based on Id";
            return false;
        }
        //  if(request.context==="Student.Student.Create")
        //  {
        //     request.message="Error: User Role is Student so unable to Create a new Student Data";
        //     return false;
        //  }
        if (context === "Student.Student.Update") {
            request.message = "Error: User Role is Student so unable to update Distinct Student Data based on Id";
            return false;
        }
        if (context === "Student.Student.Delete") {
            request.message = "Error: User Role is Student so unable to delete Distinct Student Data based on Id";
            return false;
        }
    }
    return true;
});
//# sourceMappingURL=permission.handler.js.map