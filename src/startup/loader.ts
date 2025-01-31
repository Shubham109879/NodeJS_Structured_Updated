import 'reflect-metadata';
import { container, DependencyContainer } from 'tsyringe';
import { Injector } from './injector';
// import { Authenticator } from '../auth/authenticator';
import { StudentAuthenticator } from '../auth/wrappers/student.authenticator';


//////////////////////////////////////////////////////////////////////////////////////////////////

export class Loader {

    //#region Variables

    // private static _authorizer: Authorizer = null;

    // private static _authenticator: StudentAuthenticator = null;

    // private static _studentRepo: StudentRepo = null;

    private static _container: DependencyContainer = container;

     //#endregion

    //  public static get Authenticator() {
    //     return Loader._authenticator;
    // }
    

    public static init = async (): Promise<boolean> => {
        try {

            //Register injections here...
            Injector.registerInjections();

            // Loader._authenticator = container.resolve(Authenticator);

            // Loader._studentRepo = container.resolve(StudentRepo);

            return true;

        } catch (error) {
             
            // Logger.instance().log(error.message);
            console.log(error.message);
            return false;
        }
    };

}
