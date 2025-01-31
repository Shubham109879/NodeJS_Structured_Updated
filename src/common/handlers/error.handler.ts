
import { ApiError } from "../api.error";

export class ErrorHandler {

    static throwInputValidationError=(errorMessages)=>{
        var message='Validation error has occured!\n';

        if(errorMessages)
        {
            message=message+' '+Array.isArray(errorMessages) ? errorMessages.join(''): errorMessages.toString();
            message=message.split('"').join('');
        }

        throw new ApiError(message, 422);
    }


    static throwDuplicateUserError=(message) =>{
        throw new ApiError(message, 422);
    }

    static throwNotFoundError=(message) =>{
        throw new ApiError(message, 404);
    }

    static throwUnauthorizedUserError=(message) =>{
        throw new ApiError(message, 401);
    }

    static handleValidationError=(error)=>{
        if(error.isJoi===true)
        {
          const errorMessages=error.details.map(x => x.message);
          ErrorHandler.throwInputValidationError(errorMessages);  
        }

        else
        {
          ErrorHandler.throwInputValidationError(error.message);
        }
    }

    
}