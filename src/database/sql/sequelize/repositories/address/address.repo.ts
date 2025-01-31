import { Request } from "express";
import { IAddressRepo } from "../../../../repository.interfaces/address/address.repo.interface.js";
import { Address } from "../../models/address.model.js";


export class AddressRepo implements IAddressRepo{
  
    getAddressById=async (id: number)=>{
        const address=await Address.findByPk(id);
        return address;
    }

    getAddresses=async (req: Request)=>{
        const addresses=await Address.findAll({});
        return addresses;
    }

    createAddress=async (req: Request):Promise<any>=>{
        const address=await Address.create({
            city: req.body.city,
        })

        return address;
    }

    updateAddress=async (req: Request)=>{
        const address=await Address.findByPk(req.params.id);

        if(address!=null)
        {
           address.set("city",req.body.city);
           await address.save();
        }

        return address;
    }

    deleteAddress=async (req: Request)=>{
        
        const address=await Address.destroy({
            where:{
               id: req.params.id,
            }
           });

         return address;    
    }


}