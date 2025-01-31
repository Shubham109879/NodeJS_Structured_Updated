import express from "express";
import { FileResourceUploadDomainModel } from "../../../domain.types/general/file.resource/file.resource.domain.model";
import { TimeHelper } from "../../../common/time.helper";
import path  from "path";
import * as expressFileupload from 'express-fileupload';
import { FileResourceMetadata } from "../../../domain.types/general/file.resource/file.resource.types";
import { ResponseHandler } from "../../../common/handlers/response.handler";
import mime from "mime-types";


export class UploadModel{

    getUploadModel=async(req: express.Request): Promise<FileResourceUploadDomainModel[]> => {

        var currentStudentId = req.payload.id;

        // var currentStudentId=1;

        console.log(currentStudentId);
        var models: FileResourceUploadDomainModel[] = [];
        var fileMetadataList = await this.getFileMetadataList(req);

        var mimeType = null;
        if (fileMetadataList.length > 0) {
            mimeType = fileMetadataList[0].MimeType;
        }

        for (var x of fileMetadataList) {
            const model: FileResourceUploadDomainModel = {
                FileMetadata           : x,
                // OwnerUserId            : req.body.OwnerUserId ?? currentStudentId,
                UploadedByUserId       : currentStudentId,
                // IsPublicResource       : req.body.IsPublicResource && req.body.IsPublicResource === 'true' ? true : false,
                // IsMultiResolutionImage : req.body.IsMultiResolutionImage && req.body.IsMultiResolutionImage === 'true' ? true : false,
                MimeType               : mimeType,
            };
            models.push(model);
        }

        return models;
    }

    public getFileMetadataList(req: express.Request) {
        var timestamp = TimeHelper.timestamp(new Date());
        var tempUploadFolder = path.join(process.cwd(), "uploads");
        // var folderPath = path.join(tempUploadFolder, timestamp);
        const filename="Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";
        var folderPath = path.join(tempUploadFolder,filename);
        var fileMetadataList = this.storeLocally(folderPath, req.files);
        // console.log("Output");
        // console.log(fileMetadataList);
        return fileMetadataList;
    }

    storeLocally = async (tempFolder: string, files: expressFileupload.FileArray):Promise<FileResourceMetadata[]> => {

        let metadataDetails = [];

        const filename="Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";

        const folder=path.join(process.cwd(),"uploads");

        const tempFilename = path.join(folder, filename);

        let mimeType = mime.lookup(tempFilename);
                   
        if (!mimeType) {
           mimeType = 'text/plain';
        }

    
        for (const key in files) {
            const file = files[key];
        
          if (Array.isArray(file)) {
            const fileArray = file;
            for (const fileElement of fileArray) {

              const res= await this.moveToTempFolder(tempFolder, fileElement);

              if(res)
              {
                const metadata: FileResourceMetadata = {
                    FileName       : filename,
                    OriginalName   : fileElement.name,
                    SourceFilePath : tempFilename,
                    MimeType       : mimeType,
                    Size           : fileElement.size,
                    StorageKey     : null
                };

                metadataDetails.push(metadata);
              }
              
             }
           }
    
           else
           {
              const res=this.moveToTempFolder(tempFolder,file);
              if(res)
              {
                  const metadata: FileResourceMetadata = {
                      FileName       : filename,
                      OriginalName   : file.name,
                      SourceFilePath : tempFilename,
                      MimeType       : mimeType,
                      Size           : file.size,
                      StorageKey     : null
                  }; 
                 metadataDetails.push(metadata); 
              }
                
           }
       }
        return metadataDetails;
    }

     moveToTempFolder = async (folder, file): Promise<any> => {

          return new Promise((resolve, reject) => {
                file.mv(folder, function (error) {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(true);
                });
            });
    };



}