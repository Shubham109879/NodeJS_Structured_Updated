import Joi from "joi";
import { ErrorHandler } from "../../common/handlers/error.handler";

export class AddressValidator{
    static async validateCreateRequest(requestBody)
    {
        try 
        {
           const schema=Joi.object({
             city: Joi.string().min(2).max(15).required(),
           }) 

           return await schema.validateAsync(requestBody);
        } 
        
        catch (error) 
        {
            ErrorHandler.handleValidationError(error);
        }
    }


    static async validateUpdateRequest(requestBody)
    {
        try 
        {
           const schema=Joi.object({
             city: Joi.string().min(2).max(15),
           }) 

           return await schema.validateAsync(requestBody);
        } 
        
        catch (error) 
        {
            ErrorHandler.handleValidationError(error);
        }
    }
}