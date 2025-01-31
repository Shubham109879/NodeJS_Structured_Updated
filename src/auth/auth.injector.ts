import 'reflect-metadata';
import { DependencyContainer } from 'tsyringe';
import { CustomStudentAuthenticator } from './custom/custom.student.authenticator';
import { CustomStudentAuthorizer } from './custom/custom.student.authorizer';


export class AuthInjector {

    static registerInjections(container: DependencyContainer) {

        // container.register('IAuthenticator', StudentAuthenticator);
        container.register('IStudentAuthenticator', CustomStudentAuthenticator);
        container.register('IStudentAuthorizer', CustomStudentAuthorizer);

    }

}