import express from "express";
import { IStudentRepo } from "../../database/repository.interfaces/student/student.repo.interface.js";
import { injectable, inject } from "tsyringe";
import { StudentMapper } from "../../mapper/student.mapper.js";
import jwt from "jsonwebtoken";
// import { IAuthenticator } from "../../auth/authenticator.interface.js";


@injectable()
export class StudentService{
 

   constructor(@inject('IStudentRepo') private _studentRepo: IStudentRepo){
     
   }

   


    getStudentById=async (id: number)=>{
        // let student={
        //   Name:"Sam",
        //   Age: 35,
        // };
  
        const student=await this._studentRepo.getStudentById(id); 
  
        return StudentMapper.toDto(student);
          
      }

      getStudents=async (req:express.Request)=>{

        const students=await this._studentRepo.getStudents(req); 
  
        return StudentMapper.toArrayDto(students);

      }

      loginStudent=async (req:express.Request) => {


        const students=await this._studentRepo.loginStudent(req); 
  
        return students;
      }

      
      getProfile=async (req:express.Request)=>{

        const students=await this._studentRepo.getProfile(req); 
  
        return StudentMapper.toDto(students);

      }

      createStudent=async (req:express.Request)=>{

        const student=await this._studentRepo.createStudent(req); 
  
        return StudentMapper.toDto(student);

      }

      updateStudent=async(req:express.Request)=>{
        const student=await this._studentRepo.updateStudent(req); 
  
        return StudentMapper.toDto(student);
      }

      deleteStudent=async(req:express.Request)=>{
        const student=await this._studentRepo.deleteStudent(req); 
  
        return StudentMapper.toDto(student);
      }
}