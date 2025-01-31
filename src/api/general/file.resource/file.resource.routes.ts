import express from "express";
import { fileUploadMiddleware } from "../../../middlewares/file.upload.middleware";
import { FileResourceController } from "./file.resource.controller";
import { StudentAuth } from "../../student/student.auth";
import { auth } from "../../../auth/auth.handler";
import { StudentController } from "../../student/student.controller";




export const register=(app: express.Application)=>{

    const router=express.Router();

    fileUploadMiddleware(router);

    const controller=new FileResourceController();

    const studentController=new StudentController();

    router.post("/login",auth(StudentAuth.loginStudent),studentController.loginStudent);

    router.post("/upload",auth(StudentAuth.upload),controller.upload);

    router.get("/download",auth(StudentAuth.download),controller.download);

    app.use("/api/v1/file-resources",router);
}