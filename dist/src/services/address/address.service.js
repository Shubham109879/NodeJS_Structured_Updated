"use strict";
// import { createJwtToken } from "../common/Authorization.js";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AddressService = void 0;
const tsyringe_1 = require("tsyringe");
const address_mapper_js_1 = require("../../mapper/address.mapper.js");
// import { StudentMapper } from "../mapper/student.mapper";
let AddressService = class AddressService {
    constructor(_addressRepo) {
        this._addressRepo = _addressRepo;
        this.getAddressById = (id) => __awaiter(this, void 0, void 0, function* () {
            const address = yield this._addressRepo.getAddressById(id);
            return address_mapper_js_1.AddressMapper.toDto(address);
        });
        this.getAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const addresses = yield this._addressRepo.getAddresses(req);
            return address_mapper_js_1.AddressMapper.toArrayDto(addresses);
        });
        this.createAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = yield this._addressRepo.createAddress(req);
            return address_mapper_js_1.AddressMapper.toDto(address);
        });
        this.updateAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = this._addressRepo.updateAddress(req);
            return address_mapper_js_1.AddressMapper.toDto(address);
        });
        this.deleteAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = yield this._addressRepo.deleteAddress(req);
            return address_mapper_js_1.AddressMapper.toDto(address);
        });
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('IAddressRepo')),
    __metadata("design:paramtypes", [Object])
], AddressService);
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
//# sourceMappingURL=address.service.js.map