import express from "express";
import { DownloadDisposition, FileResourceMetadata } from "../../../domain.types/general/file.resource/file.resource.types";



export class DownloadModel{

getDownloadMetaData = async (request: express.Request): Promise<FileResourceMetadata> => {


    // var metadata: FileResourceMetadata = {
    //     ResourceId  : request.params.id,
    //     Disposition : disposition
    // };

    var metadata: FileResourceMetadata = {
        ResourceId  : 1,
        Disposition : DownloadDisposition.Attachment,
    };

    return metadata;
 }
}