import express from "express";
import { registerStudent } from "./student/student.route.js";
import { registerAddress } from "./address/address.route.js";
import { register } from "./general/file.resource/file.resource.routes.js";

export class Router
{
    private _app:express.Application=null;

   constructor(app:express.Application)
   {
    this._app=app;
   }

   public init=async ():Promise<Boolean>=>{
      return new Promise((resolve,reject)=>{
         try 
         {
           this._app.get("/api/v1",(req,res)=>{
              res.send({message: 'Demo Api Service'});
           })
         //   console.log(this._app);
           
           registerStudent(this._app);
           registerAddress(this._app);
           register(this._app);
           resolve(true);
         } 
         
         catch (error) 
         {
           console.log("Error initializing the Routes");
           console.log(error.message);  
           reject(false);
         }
      })
   }
}