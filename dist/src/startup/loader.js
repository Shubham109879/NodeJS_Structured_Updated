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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const injector_1 = require("./injector");
//////////////////////////////////////////////////////////////////////////////////////////////////
class Loader {
}
exports.Loader = Loader;
_a = Loader;
//#region Variables
// private static _authorizer: Authorizer = null;
// private static _authenticator: StudentAuthenticator = null;
// private static _studentRepo: StudentRepo = null;
Loader._container = tsyringe_1.container;
//#endregion
//  public static get Authenticator() {
//     return Loader._authenticator;
// }
Loader.init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Register injections here...
        injector_1.Injector.registerInjections();
        // Loader._authenticator = container.resolve(Authenticator);
        // Loader._studentRepo = container.resolve(StudentRepo);
        return true;
    }
    catch (error) {
        // Logger.instance().log(error.message);
        console.log(error.message);
        return false;
    }
});
//# sourceMappingURL=loader.js.map