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
exports.Router = void 0;
const student_route_js_1 = require("./student/student.route.js");
const address_route_js_1 = require("./address/address.route.js");
const file_resource_routes_js_1 = require("./general/file.resource/file.resource.routes.js");
class Router {
    constructor(app) {
        this._app = null;
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.get("/api/v1", (req, res) => {
                        res.send({ message: 'Demo Api Service' });
                    });
                    //   console.log(this._app);
                    (0, student_route_js_1.registerStudent)(this._app);
                    (0, address_route_js_1.registerAddress)(this._app);
                    (0, file_resource_routes_js_1.register)(this._app);
                    resolve(true);
                }
                catch (error) {
                    console.log("Error initializing the Routes");
                    console.log(error.message);
                    reject(false);
                }
            });
        });
        this._app = app;
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map