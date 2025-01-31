import 'reflect-metadata';
import express from 'express';
import { IStudentAuthenticator } from '../interfaces/student.authenticator.interface';
import { injectable, inject } from "tsyringe";

import { ResponseHandler } from '../../common/handlers/response.handler';
// import { Logger } from '../common/logger';

////////////////////////////////////////////////////////////////////////

@injectable()
export class StudentAuthenticator {

    constructor(
        @inject('IStudentAuthenticator') private _authenticator: IStudentAuthenticator
    ) {}

    public authenticateUser = async (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ):Promise<void> => {
        try {
            const authResult = await this._authenticator.authenticate(request);
            console.log(authResult);
            if (authResult.Result === false){
                ResponseHandler.failure(request, response, authResult.Message, authResult.HttpErrorCode);
                // return false;
            }

            next();
        } catch (error: any) {
            console.log(error.message);
            ResponseHandler.failure(request, response, 'User authentication error: ' + error.message, 401);
        }
    };

}