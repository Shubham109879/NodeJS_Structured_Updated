import express from "express";
import "dotenv/config";

import { AddressController } from "./address.controller";


 export const registerAddress=(app:express.Application)=>{

   const addressRouter=express.Router();

   const controller=new AddressController();

   addressRouter.get('/all',controller.get);

   addressRouter.get('/:id',controller.getById);

   addressRouter.post('/',controller.create);

   addressRouter.put('/:id',controller.update);

   addressRouter.delete('/:id',controller.del);

   app.use(express.json());

   app.use('/api/v1/address',addressRouter);

 }
