"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const address_service_1 = require("../../services/address/address.service");
const response_handler_1 = require("../../common/handlers/response.handler");
const error_handler_1 = require("../../common/handlers/error.handler");
const api_error_1 = require("../../common/api.error");
const injector_1 = require("../../startup/injector");
const address_validator_1 = require("./address.validator");
class AddressController {
    constructor() {
        // service=new StudentService();
        // service: AddressService=null;
        // constructor(){
        //    this.service=new AddressService();
        // }
        this._service = injector_1.Injector.Container.resolve(address_service_1.AddressService);
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                let address = yield this._service.getAddressById(parseInt(req.params.id));
                if (address === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Address Not Found");
                }
                const message = "Successfully received address information";
                response_handler_1.ResponseHandler.success(req, res, message, 200, address);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                let address = yield this._service.getAddress(req);
                if (address === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Address Not Found");
                }
                const message = "Successfully received address information";
                response_handler_1.ResponseHandler.success(req, res, message, 200, address);
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
            catch (error) {
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
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                yield address_validator_1.AddressValidator.validateCreateRequest(req.body);
                const address = yield this._service.createAddress(req);
                if (address === null) {
                    throw new api_error_1.ApiError("Unable to create Address!", 400);
                }
                const message = "Address created  successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, address);
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
            }
            catch (error) {
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
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                const isPresent = yield this._service.getAddressById(parseInt(req.params.id));
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Address with Id ${req.params.id} not found`);
                }
                yield address_validator_1.AddressValidator.validateUpdateRequest(req.body);
                const updateModel = this.getUpdateModel(req.body);
                const address = yield this._service.updateAddress(req);
                response_handler_1.ResponseHandler.success(req, res, "Successfully updated...", 200, address);
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
            catch (error) {
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
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.del = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                // res.send({
                //   // Message: 'student-controller got a DELETE request',
                //   Message: response4,
                //   Url: req.baseUrl,
                //   Method: req.method
                // }) 
                const id = parseInt(req.params.id);
                const isPresent = yield this._service.getAddressById(id);
                console.log(isPresent);
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Address with Id ${req.params.id} not found`);
                }
                // const stud=await this.service.deleteStudent(req);
                const stud = yield this._service.deleteAddress(req);
                const message = "Address record deleted successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, stud);
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
            catch (error) {
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
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
    }
    getUpdateModel(requestBody) {
        const model = {
            city: requestBody.name,
        };
        return model;
    }
}
exports.AddressController = AddressController;
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
//# sourceMappingURL=address.controller.js.map