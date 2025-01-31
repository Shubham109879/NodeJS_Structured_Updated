import { Request } from "express";
import { IStudentRepo } from "../../../../repository.interfaces/student/student.repo.interface.js";
import { Student } from "../../models/student.model.js";
import jwt from "jsonwebtoken";


export class StudentRepo implements IStudentRepo{

    // constructor(@inject('IAuthenticator') private _studAuth: IAuthenticator){

    // }
   
    getStudentById=async (id: number)=>{
        const student=await Student.findByPk(id);
        return student;
    }

    getStudents=async (req: Request)=>{
        const students=await Student.findAll({});
        return students;
    }

    createStudent=async (req: Request):Promise<any>=>{
        const student=await Student.create({
            name: req.body.name,
            age: parseInt(req.body.age),
            password: req.body.password
        })

        return student;
    }

    updateStudent=async (req: Request)=>{
        const student=await Student.findByPk(req.params.id);

        if(student!=null)
        {
           student.set("name",req.body.name);
           student.set("age",req.body.age);
           student.set("password",req.body.password);

           await student.save();
        }

        return student;
    }

    deleteStudent=async (req: Request)=>{
        
        const student=await Student.destroy({
            where:{
               id: req.params.id,
            }
           });

         return student;    
    }

    getProfile=async(req: Request) =>{

        // console.log(parseInt((req as any).payload.id));

        // const id=Number(req.payload.id);
        
        const student=await Student.findOne({
          where:{
            name: req.payload.name
          }
        });

      //   if (isNaN(id)) {
      //     throw new Error('Invalid student ID');
      // }

         return student; 
    }

    loginStudent=async(req: Request)=>{
        //   const payload={
      //     email: req.body.email
      // };


      const student=await Student.findOne({
        where:{
            name: req.body.name,
            password: req.body.password
        }
      });

      

      console.log(student);

      if(student!=null)
      {
       
       const payload={
        id: student.get("id"),
        roles: "student",
        // roles: "admin",
       };   
        let token=this.createJwtToken(payload);
  
         console.log(token);
         return{
          Message: "Login Successful",
          Token: token
         }; 
       }

       else
       {
         return "Invalid username or password";
       }
      }

      

      public createJwtToken = (student) => {
        try {
            const token = jwt.sign(student,"MySecretKey",    // Secret key
                { expiresIn: '2h' } // Token expiration (e.g., 2 hours)
            );
            return token;
        } catch (error: any) {
            console.error('Error creating JWT token:', error);
            throw new Error('Failed to create token');
        }
    };

  }
    



