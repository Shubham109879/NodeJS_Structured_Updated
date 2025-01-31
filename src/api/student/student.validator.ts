import Joi from "joi";
import { ErrorHandler } from "../../common/handlers/error.handler";

export class StudentValidator{
    static async validateCreateRequest(requestBody)
    {
        try 
        {
           const schema = Joi.object({
             name: Joi.string().min(2).max(15).required(),
             age: Joi.number().integer().min(20).required(),
             password: Joi.string()
               .regex(/.*\d.*/) // At least one digit in any position
               .regex(/.*[a-zA-Z].*/) // At least one letter in any position
               .regex(/.*[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/) // At least one special character
               .min(4) // Minimum length of 4 characters
               .required() // Password is required
               .messages({
                 "string.pattern.base":
                   "Password must include at least one letter, one digit, and one special character.",
                 "string.min": "Password must be at least 4 characters long.",
               }),
           }); 

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
             name: Joi.string().min(2).max(15),
             age: Joi.number().integer().min(20),
           }) 

           return await schema.validateAsync(requestBody);
        } 
        
        catch (error) 
        {
            ErrorHandler.handleValidationError(error);
        }
    }
}