import express from "express";
import { options } from "joi";
import { AuthOptions, ResourceOwnership, Roles } from "./auth.types";
import { ResponseHandler } from "../common/handlers/response.handler";
import { Injector } from "../startup/injector";
// import { Authenticator } from "./authenticator";
import { StudentAuthenticator } from "./wrappers/student.authenticator";
import { StudentAuthorizer } from "./wrappers/student.authorizer";


export type AuthMiddleware =
    (request: express.Request, response: express.Response, next: express.NextFunction)
    => Promise<void>;

export class AuthHandler{

    public static handle=(options: AuthOptions):AuthMiddleware[]=>{
        var middlewares: AuthMiddleware[] = [];
        
        //Set context
        var contextSetter = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
            request.context = options.Context;
            const tokens = options.Context.split('.');
            if (tokens.length < 2) {
                ResponseHandler.failure(request, response, 'Invalid request context', 400);
                return;
            }
            // const resourceIdIdentifier = options.ResourceIdName ? options.ResourceIdName.toString() : null;
            request.context=options.Context;
            request.requestType = options.RequestType;
            request.ownership = options.Ownership;
            next();
        };
        middlewares.push(contextSetter);

        // const studentResource = options.Ownership === ResourceOwnership.Student;

        const isLogin=options.Context==="Student.Student.LoginStudent";

        console.log(isLogin);

        if(isLogin)
        {
          return middlewares;
        }


        var authenticator = Injector.Container.resolve(StudentAuthenticator);
        middlewares.push(authenticator.authenticateUser);

        var authorizer = Injector.Container.resolve(StudentAuthorizer);
        middlewares.push(authorizer.authorize);

        return middlewares;
    }

    
}    

export const auth=AuthHandler.handle;