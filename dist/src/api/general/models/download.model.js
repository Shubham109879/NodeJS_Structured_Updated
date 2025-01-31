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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadModel = void 0;
const file_resource_types_1 = require("../../../domain.types/general/file.resource/file.resource.types");
class DownloadModel {
    constructor() {
        this.getDownloadMetaData = (request) => __awaiter(this, void 0, void 0, function* () {
            // var metadata: FileResourceMetadata = {
            //     ResourceId  : request.params.id,
            //     Disposition : disposition
            // };
            var metadata = {
                ResourceId: request.payload.id,
                Disposition: file_resource_types_1.DownloadDisposition.Attachment,
            };
            return metadata;
        });
    }
}
exports.DownloadModel = DownloadModel;
//# sourceMappingURL=download.model.js.map