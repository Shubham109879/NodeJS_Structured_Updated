import express from "express";
import { ResponseHandler } from "../../../common/handlers/response.handler";
import { UploadModel } from "../models/upload.model";
import { FileResourceMetadata } from "../../../domain.types/general/file.resource/file.resource.types";
import { ApiError } from "../../../common/api.error";
import mime from "mime-types";
import fs from "fs";
import path from "path";
import { DownloadModel } from "../models/download.model";

export class FileResourceController{


    _model: UploadModel=new UploadModel();

    _downloadModel: DownloadModel=new DownloadModel();

    upload=async (req: express.Request, res: express.Response):Promise<void>=>{
       
        try 
        {
           const domainModels = await this._model.getUploadModel(req);


            
          ResponseHandler.success(req,res,"File Uploaded Successfully",201,domainModels);
        } 
        
        catch (error) 
        {
            ResponseHandler.handleError(req,res,error);
        }

    }

    download=async (req: express.Request, res:express.Response):Promise<void>=>{


        try 
        {

            var metadata=await this._downloadModel.getDownloadMetaData(req);

            var tempUploadFolder = path.join(process.cwd(), "uploads");
            const filename="Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";
            var localDestination=path.join(tempUploadFolder,filename);
            
            this.streamToResponse(localDestination, res, metadata);
        } 
        
        
        catch (error) 
        {
           ResponseHandler.handleError(req,res,error);  
        }
    }


    private streamToResponse(
        localDestination: string,
        response: express.Response<any, Record<string, any>>,
        metadata: FileResourceMetadata) {

        if (localDestination == null) {
            throw new ApiError(404, 'File resource not found.');
        }

        // var filename = path.basename(localDestination);
        // var mimetype = metadata.MimeType ?? Helper.getMimeType(localDestination);

        let mimetype = mime.lookup(localDestination);

        // var filename = path.basename(localDestination);

        if (!mimetype) {
            mimetype = 'text/plain';
        }

        // this.setDownloadResponseHeaders(response, metadata.Disposition, mimetype, filename);

        response.writeHead(200, {
            "Content-Type": "application/octet-stream", // Force binary file download
            "Content-Disposition": "attachment; filename=snap_insta_alternate.png",
        });

        var filestream = fs.createReadStream(localDestination);
        filestream.pipe(response);
    }
    
}