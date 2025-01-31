import express from 'express';
import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IStudentAuthorizer } from '../interfaces/student.authorizer.interface';
import { ResponseHandler } from '../../common/handlers/response.handler';

////////////////////////////////////////////////////////////////////////

@injectable()
export class StudentAuthorizer {

    constructor(@inject('IStudentAuthorizer') private _authorizer: IStudentAuthorizer) {}

    public authorize = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): Promise<void> => {
        const authorized = await this._authorizer.authorize(request, response);
        if (!authorized) {
            // ResponseHandler.failure(request, response, 'Unauthorized access', 403);
            ResponseHandler.failure(request, response, request.message, 403);
            return;
        }
        next();
    };

    public verify = async (request: express.Request): Promise<boolean> => {
        const authorized = await this._authorizer.authorize(request, null);
        return authorized;
    };

}
