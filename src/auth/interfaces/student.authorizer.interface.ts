import express from 'express';

////////////////////////////////////////////////////////////////////////

export interface IStudentAuthorizer {

    authorize(
        request: express.Request,
        response: express.Response) : Promise<boolean>;

}
