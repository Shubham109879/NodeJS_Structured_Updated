import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CurrentStudent } from "../../domain.types/miscellaneous/current.student";
import { ResponseHandler } from "../../common/handlers/response.handler";
import { Roles } from "../../auth/auth.types";


export async function authorization(req: express.Request,res: express.Response,next: express.NextFunction) {

    console.log("Authorization entered");

    try 
    {
        const authHeader=req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        console.log(`Token Generated: ${token}`);
    
        if(token === null || token === 'null' || token === undefined)
        {
           ResponseHandler.failure(req,res,"Token is null or undefined so Authorization failed",401);
        }
    
        const payload=jwt.verify(token,"MySecretKey") as JwtPayload;

        console.log(payload);
    
        req.payload=payload as CurrentStudent;

        req.payload.id=payload.id;

        req.payload.roles=payload.roles;

        console.log(req.payload.id);

        console.log(req.payload.roles);

        console.log(payload.iat);

        console.log(payload.exp);    
    
        next();    
    } 
    
    catch (error) {
        ResponseHandler.handleError(req,res,error);
    }
    
    
} 

export const checkRoles = (roles: string[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      try {
        const userRole = req.payload.roles;
  
        if (!userRole) {
          const msg = "Forbidden: User role is undefined.";
          return ResponseHandler.failure(req, res, msg, 403);
        }
  
        if (!roles.includes(userRole)) {
          const msg = `Forbidden: Insufficient permissions. Required roles: ${roles.join(", ")}`;
          return ResponseHandler.failure(req, res, msg, 403);
        }
  
        // If role is valid, proceed to the next middleware/route handler
        next();
      } catch (error) {
        const msg = "An error occurred while checking roles.";
        return ResponseHandler.failure(req, res, msg, 500);
      }
    };
  };
  

