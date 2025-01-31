import { EnumDataType } from "sequelize";
import { CurrentStudent } from "../../domain.types/miscellaneous/current.student";

declare global{
    namespace Express {
        interface Request {
            payload: CurrentStudent,
            // payload: string | JwtPayload

            message: string;

            

            context            : string;
            actionScope        : ActionScope;
            ownership          : ResourceOwnership;
            requestType        : RequestType | null | undefined;
            resourceId         : string | number | null | undefined;
            resourceOwnerUserId: string | null | undefined;
            resourceTenantId   : string | null | undefined;
            clientAppAuth      : boolean; //This flag indicates that the request is for the client app specific endpoints
            customAuthorization: boolean; //This flag indicates that the authorization is done using a custom function
            alternateAuth      : boolean; //This flag indicates that the request is for the alternate authentication
            signupOrSignin     : boolean; //This flag indicates that the request is for user registration or login
            optionalUserAuth   : boolean; //The resources may or may not require user authentication
            
        }
    }
}