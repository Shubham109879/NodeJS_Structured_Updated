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
exports.UploadModel = void 0;
const time_helper_1 = require("../../../common/time.helper");
const path_1 = __importDefault(require("path"));
const mime_types_1 = __importDefault(require("mime-types"));
class UploadModel {
    constructor() {
        this.getUploadModel = (req) => __awaiter(this, void 0, void 0, function* () {
            // var currentStudentId = req.payload.id;
            var currentStudentId = 1;
            console.log(currentStudentId);
            var models = [];
            var fileMetadataList = yield this.getFileMetadataList(req);
            var mimeType = null;
            if (fileMetadataList.length > 0) {
                mimeType = fileMetadataList[0].MimeType;
            }
            for (var x of fileMetadataList) {
                const model = {
                    FileMetadata: x,
                    // OwnerUserId            : req.body.OwnerUserId ?? currentStudentId,
                    UploadedByUserId: currentStudentId,
                    // IsPublicResource       : req.body.IsPublicResource && req.body.IsPublicResource === 'true' ? true : false,
                    // IsMultiResolutionImage : req.body.IsMultiResolutionImage && req.body.IsMultiResolutionImage === 'true' ? true : false,
                    MimeType: mimeType,
                };
                models.push(model);
            }
            return models;
        });
        this.storeLocally = (tempFolder, files) => __awaiter(this, void 0, void 0, function* () {
            let metadataDetails = [];
            const filename = "Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";
            const folder = path_1.default.join(process.cwd(), "uploads");
            const tempFilename = path_1.default.join(folder, filename);
            let mimeType = mime_types_1.default.lookup(tempFilename);
            if (!mimeType) {
                mimeType = 'text/plain';
            }
            for (const key in files) {
                const file = files[key];
                if (Array.isArray(file)) {
                    const fileArray = file;
                    for (const fileElement of fileArray) {
                        const res = yield this.moveToTempFolder(tempFolder, fileElement);
                        if (res) {
                            const metadata = {
                                FileName: filename,
                                OriginalName: fileElement.name,
                                SourceFilePath: tempFilename,
                                MimeType: mimeType,
                                Size: fileElement.size,
                                StorageKey: null
                            };
                            metadataDetails.push(metadata);
                        }
                    }
                }
                else {
                    const res = this.moveToTempFolder(tempFolder, file);
                    if (res) {
                        const metadata = {
                            FileName: filename,
                            OriginalName: file.name,
                            SourceFilePath: tempFilename,
                            MimeType: mimeType,
                            Size: file.size,
                            StorageKey: null
                        };
                        metadataDetails.push(metadata);
                    }
                }
            }
            return metadataDetails;
        });
        this.moveToTempFolder = (folder, file) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                file.mv(folder, function (error) {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(true);
                });
            });
        });
    }
    getFileMetadataList(req) {
        var timestamp = time_helper_1.TimeHelper.timestamp(new Date());
        var tempUploadFolder = path_1.default.join(process.cwd(), "uploads");
        // var folderPath = path.join(tempUploadFolder, timestamp);
        const filename = "Snapinsta.app_224073409_912591196138918_3949373975258935534_n_1080.jpg";
        var folderPath = path_1.default.join(tempUploadFolder, filename);
        var fileMetadataList = this.storeLocally(folderPath, req.files);
        // console.log("Output");
        // console.log(fileMetadataList);
        return fileMetadataList;
    }
}
exports.UploadModel = UploadModel;
//# sourceMappingURL=upload.model.js.map