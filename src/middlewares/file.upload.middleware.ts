import express from "express";
import fileUpload from "express-fileupload";


export const fileUploadMiddleware=(router: express.Router)=>{
 
    const MAX_UPLOAD_FILE_SIZE=104857600;

    router.use(fileUpload({
        limits: { fileSize: MAX_UPLOAD_FILE_SIZE },
        preserveExtension: true,
        createParentPath: true,
        parseNested: true,
        useTempFiles: true,
        tempFileDir: '/tmp/uploads/'
    }));
}