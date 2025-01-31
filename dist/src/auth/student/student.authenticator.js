"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAuthenticator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class StudentAuthenticator {
    constructor() {
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
        this.authenticateUser = (req) => __awaiter(this, void 0, void 0, function* () {
            let res = {
                Result: true,
                Message: 'Authenticated',
                HttpErrorCode: 200,
            };
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader) {
                    return {
                        Result: false,
                        Message: 'Unauthorized user access',
                        HttpErrorCode: 401,
                    };
                }
                const bearerToken = authHeader.split(' ');
                // Validate Bearer token structure
                if (bearerToken.length !== 2 || bearerToken[0].toLowerCase() !== 'bearer') {
                    return {
                        Result: false,
                        Message: 'Invalid token format',
                        HttpErrorCode: 400,
                    };
                }
                const token = bearerToken[1];
                // Verify the token
                const payload = yield this.verifyJwtToken(token);
                if (!payload) {
                    return {
                        Result: false,
                        Message: 'Forbidden user access',
                        HttpErrorCode: 403,
                    };
                }
                req.payload = payload; // Attach payload to the request for future use
                return res;
            }
            catch (error) {
                console.error('Error during authentication:', error);
                return {
                    Result: false,
                    Message: 'Error authenticating user',
                    HttpErrorCode: 401,
                };
            }
        });
        // verifyJwtToken=async(student)=>{
        //     return jwt.verify(student,"MySecretKey");
        // }
        this.verifyJwtToken = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                return jsonwebtoken_1.default.verify(token, 'MySecretKey'); // Use a secure key and environment variables in production
            }
            catch (error) {
                console.error('JWT verification failed:', error);
                return null; // Return `null` if verification fails
            }
        });
    }
}
exports.StudentAuthenticator = StudentAuthenticator;
//# sourceMappingURL=student.authenticator.js.map