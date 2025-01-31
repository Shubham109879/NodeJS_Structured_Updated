import express from "express";
import "reflect-metadata";
import { Router } from "./api/router.js";
import { Loader } from "./startup/loader.js";

export default class Application{

   // Creating app instance

   public _app: express.Application=null;

   private _router: Router=null;

   private static _instance: Application = null; // Singleton Classes in js/ts
   
   constructor(){
    this._app=express();
    this._router=new Router(this._app);
   }

   public static instance():Application
   {
     return this._instance || (this._instance=new this());
   }

   public app(): express.Application {
      return this._app;
  }



   public start = async (): Promise<void>=>{
      try 
      {
        await Loader.init(); 
        await this._router.init();
        await this.listen();

      } 
      
      catch (error) {
         console.log("Error occured at start of Application");
         console.log(error.message);
      }
   }

   private listen=async ()=>{
      return new Promise((resolve,reject)=>{
         try 
         {
            this._app.listen(process.env.PORT,()=>{
              console.log(`App is listening on port ${process.env.PORT}`);
              resolve(this._app);
            })
         } 
         
         catch (error) 
         {
            console.log("Error......");
            reject(error);
         }
      })
   }
}