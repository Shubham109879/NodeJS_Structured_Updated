"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileResourceController = void 0;
const response_handler_1 = require("../../../common/handlers/response.handler");
const upload_model_1 = require("../models/upload.model");
const api_error_1 = require("../../../common/api.error");
const mime_types_1 = __importDefault(require("mime-types"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const download_model_1 = require("../models/download.model");
class FileResourceController {
    constructor() {
        this._model = new upload_model_1.UploadModel();
        this._downloadModel = new download_model_1.DownloadModel();
        this.upload = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const domainModels = yield this._model.getUploadModel(req);
                response_handler_1.ResponseHandler.success(req, res, "File Uploaded Successfully", 201, domainModels);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.download = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var metadata = yield this._downloadModel.getDownloadMetaData(req);
                var tempUploadFolder = path_1.default.join(process.cwd(), "uploads");
                const filename = "Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";
                var localDestination = path_1.default.join(tempUploadFolder, filename);
                this.streamToResponse(localDestination, res, metadata);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
    }
    streamToResponse(localDestination, response, metadata) {
        if (localDestination == null) {
            throw new api_error_1.ApiError(404, 'File resource not found.');
        }
        // var filename = path.basename(localDestination);
        // var mimetype = metadata.MimeType ?? Helper.getMimeType(localDestination);
        let mimetype = mime_types_1.default.lookup(localDestination);
        // var filename = path.basename(localDestination);
        if (!mimetype) {
            mimetype = 'text/plain';
        }
        // this.setDownloadResponseHeaders(response, metadata.Disposition, mimetype, filename);
        response.writeHead(200, {
            "Content-Type": "application/octet-stream", // Force binary file download
            "Content-Disposition": "attachment; filename=snap_insta_alternate.png",
        });
        var filestream = fs_1.default.createReadStream(localDestination);
        filestream.pipe(response);
    }
}
exports.FileResourceController = FileResourceController;
//# sourceMappingURL=file.resource.controller.js.map