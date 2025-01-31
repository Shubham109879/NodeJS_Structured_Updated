

export class ApiError extends Error{

    Trace=null;
    Code=500;

    constructor(message, errorCode,error=null){
        super();
        console.log(`Message = ${message} Error Code = ${errorCode}`);
        this.message=message ?? 'An unexpected Error has occured. ';
        this.Trace=error !=null ? error.stack : '';
        this.Code=errorCode ?? 500;
    }
}