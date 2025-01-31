export enum Roles{
   STUDENT= "student",
   ADMIN= "admin",
}

export enum RequestType {
    CreateOne  = 'CreateOne',
    CreateMany = 'CreateMany',
    GetOne     = 'GetOne',
    GetMany    = 'GetMany',
    UpdateOne  = 'UpdateOne',
    UpdateMany = 'UpdateMany',
    DeleteOne  = 'DeleteOne',
    DeleteMany = 'DeleteMany',
    Search     = 'Search',
    Custom     = 'Custom',
}

export interface AuthOptions {
    Context                : string | null;
    ActionScope            : ActionScope;
    Ownership              : ResourceOwnership;
    RequestType           ?: RequestType;
    ResourceIdName        ?: string | number;
    CustomAuthorization   ?: boolean;
    AlternateAuth         ?: boolean;
    SignupOrSignin        ?: boolean;
    OptionalUserAuth      ?: boolean;
}

export enum ActionScope {
   Admin=Roles.ADMIN,
   Student=Roles.STUDENT
}

export enum ResourceOwnership {
    Admin=Roles.ADMIN,
   Student=Roles.STUDENT
}

export const DefaultAuthOptions: AuthOptions = {
    Context             : null,
    ActionScope         : ActionScope.Student,
    Ownership           : ResourceOwnership.Student,
    RequestType         : RequestType.Custom,
    ResourceIdName      : 'id',
    CustomAuthorization : false,
    AlternateAuth       : false,
    SignupOrSignin      : false,
    OptionalUserAuth    : false,
};

export interface AuthenticationResult {
    Result       : boolean;
    Message      : string;
    HttpErrorCode: number;
    Id?          : number;
}