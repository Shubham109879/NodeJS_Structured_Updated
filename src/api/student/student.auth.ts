import { DefaultAuthOptions, ResourceOwnership } from "../../auth/auth.types";
import { AuthOptions } from "../../auth/auth.types";
import { RequestType } from "../../auth/auth.types";
import { Roles } from "../../auth/auth.types";

export class StudentAuth{

    static readonly _baseContext = 'Student.Student';

    static readonly getProfile: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.GetProfile`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.GetOne,
    };

    
    static readonly get: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.Get`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.GetMany,
    };

    
    static readonly getById: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.GetById`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.GetOne,
    };

    
    static readonly loginStudent: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.LoginStudent`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.CreateOne,
    };

    
    static readonly create: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.Create`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.CreateOne,
    };

    
    static readonly update: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.Update`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.UpdateOne,
    };

    
    static readonly del: AuthOptions = {
        ...DefaultAuthOptions,
        Context        : `${this._baseContext}.Delete`,
        Ownership      : ResourceOwnership.Student,
        // ActionScope    : ActionScope.System,
        RequestType    : RequestType.DeleteOne,
    };
}