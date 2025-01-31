import express from "express";
import { StudentService } from "../../services/student/student.service.js";
import { ResponseHandler } from "../../common/handlers/response.handler.js";
import { ErrorHandler } from "../../common/handlers/error.handler.js";
import { ApiError } from "../../common/api.error.js";
import { Injector } from "../../startup/injector.js";
import { StudentValidator } from "./student.validator.js";
import { StudentUpdateModel } from "../../domain.types/address/address.domain.type.js";

export class StudentController{
  //   service: StudentService=null;

  // constructor(){
  //    this.service=new StudentService();
  // }

  _service: StudentService = Injector.Container.resolve(StudentService);


  constructor(){
    
  }

 

  getById=async (req:express.Request,res:express.Response) =>{
    
  try 
  {
    let student =await this._service.getStudentById(parseInt(req.params.id));


    if(student===null)
    {
      ErrorHandler.throwNotFoundError("User Not Found");
    }
    const message="Successfully received user information";

    ResponseHandler.success(req,res,message,200,student);

  } 
  
  catch (error: any) 
  {
   ResponseHandler.handleError(req,res,error);   
  }
}


  get=async (req:express.Request,res:express.Response) =>{
    //res.send('Got a POST request')
  try 
  {
    let students =await this._service.getStudents(req);


    if(students===null)
    {
      ErrorHandler.throwNotFoundError("User Not Found");
    }
    const message="Successfully received user information";

    ResponseHandler.success(req,res,message,200,students);

  } 
  
  catch (error: any) 
  {
   ResponseHandler.handleError(req,res,error); 
 }
}

getProfile=async (req:express.Request,res:express.Response) =>{
  //res.send('Got a POST request')
try 
{
  console.log(req.payload.id);
  let students =await this._service.getStudentById(req.payload.id);


  if(students===null)
  {
    ErrorHandler.throwNotFoundError("User Not Found");
  }
  const message="User Profile generated Successfully, Authorization Successful";

  ResponseHandler.success(req,res,message,200,students);

} 

catch (error: any) 
{
 ResponseHandler.handleError(req,res,error); 
}
}

loginStudent= async (req:express.Request,res:express.Response)=>{
  try {

    const student=await this._service.loginStudent(req);

    if(student==null || student=== "Invalid username or password")
    {
      throw new ApiError("Unable to login!",400);
    }

    const message="Student successfully Logged In";
    ResponseHandler.success(req,res,message,200,student);
    
  } catch (error: any) {
    ResponseHandler.handleError(req,res,error);
  }
}

create = async (req:express.Request,res:express.Response)=>{

try {

  await StudentValidator.validateCreateRequest(req.body);
  
  const student=await this._service.createStudent(req);

  if(student===null)
  {
    throw new ApiError("Unable to create User!",400);
  }

  const message="User created  successfully";
  ResponseHandler.success(req,res,message,200,student);

  
} 

catch (error:any) {    
  ResponseHandler.handleError(req,res,error);
}

}

update = async (req:express.Request,res:express.Response)=>{
try 
{

  const isPresent=await this._service.getStudentById(parseInt(req.params.id));

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`User with Id ${req.params.id} not found`);
  }

  await StudentValidator.validateUpdateRequest(req.body);

  const updateModel: StudentUpdateModel=this.getUpdateModel(req.body);

  const student=await this._service.updateStudent(req);

  ResponseHandler.success(req,res,"Successfully updated...",200,student);
 
} 

catch (error:any) {
  ResponseHandler.handleError(req,res,error);
}

}

private getUpdateModel(requestBody): StudentUpdateModel{
  const model: StudentUpdateModel={
     name:requestBody.name,
     age: requestBody.age ? parseInt(requestBody.age) : undefined,
  };
  return model;
}


 del = async (req:express.Request,res:express.Response)=>{

try 
{
  
  const id: number=parseInt(req.params.id);

  const isPresent=await this._service.getStudentById(id);

  console.log(isPresent);

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`Student with Id ${req.params.id} not found`);
  }

  const student=await this._service.deleteStudent(req);
  const message="Student record deleted successfully";
  ResponseHandler.success(req,res,message,200,student);
  
} 

catch (error: any) 
{
  ResponseHandler.handleError(req,res,error);
}

}
}