import express from "express";
import { StudentController } from "./student.controller";
// import { authorization } from "./authorization";
// import { checkRoles } from "./authorization";
import { StudentAuth } from "./student.auth";
import { auth } from "../../auth/auth.handler";

// import { Loader } from "../../startup/loader";
// import dotenv from "dotenv";
// dotenv.config();


export const registerStudent=(app:express.Application): void =>{

    const studentRouter=express.Router();

    // const authenticator=Loader.Authenticator;

    // console.log(studentRouter);
 
    const controller=new StudentController();

    // studentRouter.get('/:id',controller.getById);
 
    studentRouter.get('/all',auth(StudentAuth.get),controller.get);

    // studentRouter.get('/profile',authorization,controller.getProfile);

    // studentRouter.get('/profile',authorization,checkRoles(["student"]),controller.getProfile);

    studentRouter.get('/profile',auth(StudentAuth.getProfile),controller.getProfile);
 
    studentRouter.get('/:id',auth(StudentAuth.getById),controller.getById);

    studentRouter.post('/login',auth(StudentAuth.loginStudent),controller.loginStudent);

    // studentRouter.get('/getProfile',authenticator.authenticateUser,controller.getProfile);

   
 
    studentRouter.post('/',auth(StudentAuth.create),controller.create);
 
    studentRouter.put('/:id',auth(StudentAuth.update),controller.update);
 
    studentRouter.delete('/:id',auth(StudentAuth.del),controller.del);
 
    app.use(express.json());
 
    app.use('/api/v1/student',studentRouter);
 
  }
 