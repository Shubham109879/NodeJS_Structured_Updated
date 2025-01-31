import express from 'express';
import { IStudentAuthorizer } from '../interfaces/student.authorizer.interface';
import { Injector } from '../../startup/injector';
import { StudentService } from '../../services/student/student.service';
// import { RolePrivilegeService } from '../../services/role/role.privilege.service';
import { PermissionHandler } from './permission.handler';
import { ActionScope, ResourceOwnership } from '../auth.types';

//////////////////////////////////////////////////////////////

export class CustomStudentAuthorizer implements IStudentAuthorizer {

    _studentService: StudentService = null;

    _rolePrivilegeService: any = null;

    constructor() {
        this._studentService = Injector.Container.resolve(StudentService);
    }

    public authorize = async (request: express.Request): Promise<boolean> => {
        try {

            const context = request.context;
            if (context == null || context === 'undefined') {
                return false;
            }
            
            const permissionRes = await PermissionHandler.addRoleBasedPermissions(request);
            return permissionRes; 

        } catch (error) {
            // Logger.instance().log(error.message);
            console.log(error.message);
        }
        return false;
    };

}
