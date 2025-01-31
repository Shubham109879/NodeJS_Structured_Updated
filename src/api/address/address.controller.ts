import express from "express";
import { AddressService } from "../../services/address/address.service";
import { ResponseHandler } from "../../common/handlers/response.handler";
import { ErrorHandler } from "../../common/handlers/error.handler";
import { ApiError } from "../../common/api.error";
import { Injector } from "../../startup/injector";
import { AddressValidator } from "./address.validator";
import { AddressUpdateModel } from "../../domain.types/address/address.domain.type";


export class AddressController
{

  // service=new StudentService();

  // service: AddressService=null;

  // constructor(){
  //    this.service=new AddressService();
  // }

   _service: AddressService = Injector.Container.resolve(AddressService);
  
    constructor(){
      
    }

  getById=async (req:express.Request,res:express.Response) =>{
    //res.send('Got a POST request')
  try 
  {
    let address =await this._service.getAddressById(parseInt(req.params.id));


    if(address===null)
    {
      ErrorHandler.throwNotFoundError("Address Not Found");
    }

    const message="Successfully received address information";

    ResponseHandler.success(req,res,message,200,address);

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
    let address =await this._service.getAddress(req);


    if(address===null)
    {
      ErrorHandler.throwNotFoundError("Address Not Found");
    }
    const message="Successfully received address information";

    ResponseHandler.success(req,res,message,200,address);

    
    // const students=await this.service.getStudent(req);

    // res.send({
    //     // Message: 'student-controller got a GET request',
    //     Message: students,
    //     Url: req.baseUrl,
    //     Method: req.method
    //   })   

     
    // if(students=== null)
    // {
    //   res.status(404).send({
    //     Status: "failure",
    //     Code: 404,
    //     Message: "No student information found",
    //     Data: null,
    //     Url: req.baseUrl,
    //     Method:req.method
    //   })
    // }

    // res.status(200).send({
    //   Status: "Success",
    //   Code: 200,
    //   Message: "Students information retreived Successfully",
    //   Data: students,
    //   Url: req.baseUrl,
    //   Method:req.method
    // })

    //  ResponseHandler.success(req,res,message,200,record);

  } 
  
  catch (error: any) 
  {
  //   res.send({
  //   Message: "Unable to process get request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);

    
 }
}

create = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')
try {

  await AddressValidator.validateCreateRequest(req.body);

  const address=await this._service.createAddress(req);

  if(address===null)
  {
    throw new ApiError("Unable to create Address!",400);
  }

  const message="Address created  successfully";
  ResponseHandler.success(req,res,message,200,address);

  // res.send({
  //   // Message: 'student-controller got a POST request',
  //   Message: response2,
  //   Url: req.baseUrl,
  //   Method: req.method
  // }) 


  // if(student===null)
  // {
  //   res.status(404).send({
  //     Status: "failure",
  //     Code: 404,
  //     Message: "Unable to create User",
  //     Data: null,
  //     Url: req.baseUrl,
  //     Method:req.method
  //   });
  // }

  // res.status(200).send({
  //   Status: "Success",
  //   Code: 200,
  //   Message: "Students created Successfully",
  //   Data: student,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  
} catch (error:any) {
  // res.send({
  //   Message: "Unable to process post request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);
  
}

}

update = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')
try 
{

  const isPresent=await this._service.getAddressById(parseInt(req.params.id));

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`Address with Id ${req.params.id} not found`);
  }

  await AddressValidator.validateUpdateRequest(req.body);
  
  const updateModel: AddressUpdateModel=this.getUpdateModel(req.body);


  const address=await this._service.updateAddress(req);

  ResponseHandler.success(req,res,"Successfully updated...",200,address);
  // res.send({
  //   // Message: 'student-controller got a PUT request',
  //   Message: response3,
  //   Url: req.baseUrl,
  //   Method: req.method
  // })    

  // if(student===null)
  //   {
  //     res.status(404).send({
  //       Status: "failure",
  //       Code: 404,
  //       Message: "Unable to update User",
  //       Data: null,
  //       Url: req.baseUrl,
  //       Method:req.method
  //     });
  //   }
  
  //   res.status(200).send({
  //     Status: "Success",
  //     Code: 200,
  //     Message: "Student updated Successfully",
  //     Data: student,
  //     Url: req.baseUrl,
  //     Method:req.method
  //   })
} 

catch (error:any) {
  // res.send({
  //   Message: "Unable to process put request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // });

  ResponseHandler.handleError(req,res,error);
}

}

private getUpdateModel(requestBody): AddressUpdateModel{
  const model: AddressUpdateModel={
     city:requestBody.name,
  };

  return model;
}

 del = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')

try 
{
  // res.send({
  //   // Message: 'student-controller got a DELETE request',
  //   Message: response4,
  //   Url: req.baseUrl,
  //   Method: req.method
  // }) 
  
  const id: number=parseInt(req.params.id);

  const isPresent=await this._service.getAddressById(id);

  console.log(isPresent);

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`Address with Id ${req.params.id} not found`);
  }

  // const stud=await this.service.deleteStudent(req);
  const stud=await this._service.deleteAddress(req);
  const message="Address record deleted successfully";
  ResponseHandler.success(req,res,message,200,stud);


    // if(stud===null)
    // {
    //   res.status(404).send({
    //     Status: "failure",
    //     Code: 404,
    //     Message: "Unable to delete User",
    //     Data: null,
    //     Url: req.baseUrl,
    //     Method:req.method
    //   });
    // }
  
    // res.status(200).send({
    //   Status: "Success",
    //   Code: 200,
    //   Message: "Student deleted Successfully",
    //   Data: stud,
    //   Url: req.baseUrl,
    //   Method:req.method
    // })  
} 

catch (error: any) 
{
  // res.send({
  //   Message: "Unable to process delete request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);
}

}


}
















// export const get=async (req:express.Request,res:express.Response) =>{
//         //res.send('Got a POST request')
//       try 
//       {
//         const response=await getStudent(req);
//         res.send({
//             // Message: 'student-controller got a GET request',
//             Message: response,
//             Url: req.baseUrl,
//             Method: req.method
//           })   
//       } 
      
//       catch (error) 
//       {
//         res.send({
//         Message: "Unable to process get request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
        
//      }
// }

// export const create = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     try {
//       const response2=await createStudent(req);
//       res.send({
//         // Message: 'student-controller got a POST request',
//         Message: response2,
//         Url: req.baseUrl,
//         Method: req.method
//       }) 
      
//     } catch (error) {
//       res.send({
//         Message: "Unable to process post request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
      
//     }
   
//  }

//  export const update = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     try 
//     {
//       const response3=await updateStudent(req);
//       res.send({
//         // Message: 'student-controller got a PUT request',
//         Message: response3,
//         Url: req.baseUrl,
//         Method: req.method
//       })    
//     } 
    
//     catch (error) {
//       res.send({
//         Message: "Unable to process put request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
//     }
    
//  }

//  export const del = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     const response4=await deleteStudent(req);
//     try 
//     {
//       res.send({
//         // Message: 'student-controller got a DELETE request',
//         Message: response4,
//         Url: req.baseUrl,
//         Method: req.method
//       })   
//     } 
    
//     catch (error) 
//     {
//       res.send({
//         Message: "Unable to process delete request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
//     }
    
//  }

//  export const login=async (req,res)=>{
//   try 
//   {

//     let response5=await loginStudent(req);

//     console.log(response5);

//     res.send({
//       Message: response5,
//       Url: req.baseUrl,
//       Method: req.method
//     })
//   } 
  
//   catch (error) 
//   {
//     res.send({
//       Message: "Unable to  login, Please check your Credentials",
//       Url: req.baseUrl,
//       Method: req.method
//     }); 
//   }
//  }