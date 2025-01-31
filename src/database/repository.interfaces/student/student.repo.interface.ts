
import express from "express";

export interface IStudentRepo{
    getStudentById(id: number);
    
    getStudents(req: express.Request);

    createStudent(req:express.Request):Promise<any>;

    updateStudent(req:express.Request);

    deleteStudent(req:express.Request);

    getProfile(req:express.Request);

    loginStudent(req: express.Request);

    createJwtToken(studentId: number); 
}