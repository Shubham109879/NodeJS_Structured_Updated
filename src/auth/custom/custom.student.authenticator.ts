import express from "express";
import jwt from 'jsonwebtoken';
// import { IAuthenticator } from '../authenticator.interface';
import { IStudentAuthenticator } from "../interfaces/student.authenticator.interface";
import { AuthenticationResult } from "../auth.types";


export class CustomStudentAuthenticator implements IStudentAuthenticator
{

// public createJwtToken=(studentid)=>{
//     return jwt.sign({id: studentid},"MySecretKey",{expiresIn: 8000});
//     // return jwt.sign(student,"MySecretKey");
// }



// public authenticateUser=async(req:express.Request): Promise<AuthenticationResult> =>{

//     try {
        
    

//     const authHeader=req.headers.authorization;
//     console.log(authHeader);

//     var res: AuthenticationResult = {
//                 Result        : true,
//                 Message       : 'Authenticated',
//                 HttpErrorCode : 200,
//             };

//     if(authHeader!==undefined)
//     {
//       const bearerToken=authHeader.split(" ");
//       const token=bearerToken[1];

//         const payload=await this.verifyJwtToken(token);
//         // console.log(payload);

//         if(payload==null || payload==undefined)
//         {
//             res = {
//                 Result        : false,
//                 Message       : 'Forebidden user access',
//                 HttpErrorCode : 403,
//             };
//             return res;
//         }
//         req.payload=payload;
//         // console.log(req.payload);
//         // next();

//     //   return res;
//     }

//     else
//     {
//         res = {
//             Result        : false,
//             Message       : 'Unauthorized user access',
//             HttpErrorCode : 401,
//         };

//         return res;
//     }

//     return res;
//   }

//   catch(error: any){
//       res = {
//           Result        : false,
//           Message       : 'Error authenticating user',
//           HttpErrorCode : 401,
//       }; 

//   }
//   return res;
// }

public authenticate = async (req: express.Request): Promise<AuthenticationResult> => {
    
    let res: AuthenticationResult = {
        Result: true,
        Message: 'Authenticated',
        HttpErrorCode: 200,
    };

    try {
        const authHeader = req.headers.authorization;

        console.log(`Auth Header: ${authHeader}`);

        if (!authHeader) {
            return {
                Result: false,
                Message: 'Unauthorized user access',
                HttpErrorCode: 401,
            };
        }

        const bearerToken = authHeader.split(' ');

        console.log(`Bearer Token: ${bearerToken}`);

        // Validate Bearer token structure
        if (bearerToken.length !== 2 || bearerToken[0].toLowerCase() !== 'bearer') {
            return {
                Result: false,
                Message: 'Invalid token format',
                HttpErrorCode: 400,
            };
        }

        const token = bearerToken[1];

        console.log(`Token: ${token}`);

        // Verify the token
        const payload = await this.verifyJwtToken(token);

        console.log(payload);

        if (!payload) {
            return {
                Result: false,
                Message: 'Forbidden user access',
                HttpErrorCode: 403,
            };
        }

        req.payload = payload; // Attach payload to the request for future use
        return res;
    } catch (error: any) {
        console.error('Error during authentication:', error);
        return {
            Result: false,
            Message: 'Error authenticating user',
            HttpErrorCode: 401,
        };
    }
};

// verifyJwtToken=async(student)=>{
//     return jwt.verify(student,"MySecretKey");
// }

private verifyJwtToken = async (token: string): Promise<any> => {
    try {
        return jwt.verify(token, 'MySecretKey'); // Use a secure key and environment variables in production
    } catch (error: any) {
        console.error('JWT verification failed:', error);
        return null; // Return `null` if verification fails
    }
};


}