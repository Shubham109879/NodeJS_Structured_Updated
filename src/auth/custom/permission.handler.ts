import express from 'express';
import { Injector } from '../../startup/injector';
import { ActionScope, RequestType, ResourceOwnership } from "../auth.types";

////////////////////////////////////////////////////////////////////////////////////////

export class PermissionHandler {

    public static addRoleBasedPermissions = async (request: express.Request): Promise<boolean> => {
        
        const context = request.context;
        const ownership=request.ownership;
        const requestType=request.requestType;

        const roleName=request.payload.roles;

        // if(roleName==="student" || roleName==="admin")
        // {
        //     request.context=context;
        //     request.requestType=requestType;
        //     return true;
        // } 
        
       if(roleName==="student")
       {
         if(context==="Student.Student.Get")
         {
            request.message="Error: User Role is Student so unable to access All Students Data";
            return false;
         }

         if(context==="Student.Student.GetById")
         {
            request.message="Error: User Role is Student so unable to get Distinct Student Data based on Id";
            return false;
         }

        //  if(request.context==="Student.Student.Create")
        //  {
        //     request.message="Error: User Role is Student so unable to Create a new Student Data";
        //     return false;
        //  }

         if(context==="Student.Student.Update")
         {
            request.message="Error: User Role is Student so unable to update Distinct Student Data based on Id";
            return false;
         }

         if(context==="Student.Student.Delete")
         {
            request.message="Error: User Role is Student so unable to delete Distinct Student Data based on Id";
            return false;
         }
       }

           return true;
        };

        
    }

