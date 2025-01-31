import express from "express";
import { fileUploadMiddleware } from "../../../middlewares/file.upload.middleware";
import { FileResourceController } from "./file.resource.controller";




export const register=(app: express.Application)=>{

    const router=express.Router();

    fileUploadMiddleware(router);

    const controller=new FileResourceController();

    router.post("/upload",controller.upload);

    router.get("/download",controller.download);

    app.use("/api/v1/file-resources",router);
}