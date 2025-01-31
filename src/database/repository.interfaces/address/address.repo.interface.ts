
import express from "express";

export interface IAddressRepo{
    getAddressById(id: number);
    
    getAddresses(req: express.Request);

    createAddress(req:express.Request):Promise<any>;

    updateAddress(req:express.Request);

    deleteAddress(req:express.Request);
}