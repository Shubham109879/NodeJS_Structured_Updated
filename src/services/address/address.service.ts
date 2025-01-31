// import { createJwtToken } from "../common/Authorization.js";

import express from "express";
import { injectable, inject } from "tsyringe";
import { AddressMapper } from "../../mapper/address.mapper.js";
import { IAddressRepo } from "../../database/repository.interfaces/address/address.repo.interface.js";

// import { StudentMapper } from "../mapper/student.mapper";


@injectable()
export class AddressService
{

  constructor(@inject('IAddressRepo') private _addressRepo: IAddressRepo){
  
     }


   getAddressById=async (id: number)=>{
      

      const address=await this._addressRepo.getAddressById(id);

      return AddressMapper.toDto(address);
        
    }


    getAddress = async (req:express.Request):Promise<any> => {
        

        const addresses=await this._addressRepo.getAddresses(req);

        return AddressMapper.toArrayDto(addresses);
  
    }
    
    createAddress = async (req:express.Request):Promise<any> => {


      const address=await this._addressRepo.createAddress(req);

      return AddressMapper.toDto(address);
    }
    
    updateAddress = async (req:express.Request) => {
          const address=this._addressRepo.updateAddress(req);
          return AddressMapper.toDto(address);
    }
    

     deleteAddress = async (req:express.Request) => {
        
      const address=await this._addressRepo.deleteAddress(req);
      return AddressMapper.toDto(address);
    }

}


// export const getStudent = async (req:express.Request) => {
//     return "student.service got a get request and Token Verified Successfully";

//     // var payload=req.payload;
//     // console.log(payload);

//     // return {
//     //      Message: "student.service getStudents method",
//     //     //  Payload: payload,
//     // };
// }

// export const createStudent = async (req:express.Request) => {
//     return "student.service got a post request";
// }

// export const updateStudent = async (req:express.Request) => {
//     return "student.service got a update request";
// }

// export const deleteStudent = async (req:express.Request) => {
//     return "student.service got a delete request";
// }

// export const loginStudent= async (req) =>{

//     console.log(req.body);

//     console.log(req.body.email);
    
//     const payload={
//         email: req.body.email
//     };

//     if(req.body.email === "demo@gmail.com" && req.body.pass === "123456")
//     {
//        var token=createJwtToken(payload);

//        console.log(token);
//        return{
//         Message: "Login Successful",
//         Token: token
//        }; 
//     }

//     else{
//         return "Invalid username or password";
//     }
// }