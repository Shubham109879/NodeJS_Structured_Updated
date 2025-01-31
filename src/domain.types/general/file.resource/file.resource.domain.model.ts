import { FileResourceMetadata } from "./file.resource.types";


export interface FileResourceUploadDomainModel {
    id?                    : string,
    FileMetadata           : FileResourceMetadata;
    OwnerUserId?           : string;
    UploadedByUserId?      : number;
    IsPublicResource?      : boolean;
    IsMultiResolutionImage?: boolean;
    MimeType?              : string;
    DefaultVersionId?      : string;
}