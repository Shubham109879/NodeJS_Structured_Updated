"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, errorCode, error = null) {
        super();
        this.Trace = null;
        this.Code = 500;
        console.log(`Message = ${message} Error Code = ${errorCode}`);
        this.message = message !== null && message !== void 0 ? message : 'An unexpected Error has occured. ';
        this.Trace = error != null ? error.stack : '';
        this.Code = errorCode !== null && errorCode !== void 0 ? errorCode : 500;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=api.error.js.map