import { Stream } from "stream";

export interface FileResourceMetadata {
    // ResourceId?      : string;
    ResourceId?      : number;
    VersionId?       : string;
    Version?         : string;
    FileName?        : string;
    OriginalName?    : string;
    SourceFilePath?  : string;
    MimeType?        : string;
    Size?            : number;
    StorageKey?      : string;
    IsDefaultVersion?: boolean;
    IsPublicResource?: boolean;
    Disposition?     : DownloadDisposition;
    Url?             : string;
    Stream?          : Stream;
}

export enum DownloadDisposition {
    Inline     = 'inline',
    Attachment = 'attachment',
    Stream     = 'stream',
    Auto       = 'auto',
}