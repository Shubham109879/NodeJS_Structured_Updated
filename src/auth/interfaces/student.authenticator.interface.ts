import express from 'express';
import { AuthenticationResult } from '../auth.types';
// import { injectable } from 'tsyringe';


export interface IStudentAuthenticator {

    // createJwtToken(student);

    authenticate(request: express.Request) : Promise<AuthenticationResult>;

    // authenticateClient(request: express.Request) : Promise<AuthenticationResult>;

}