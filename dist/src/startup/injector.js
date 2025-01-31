"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injector = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const module_injector_1 = require("../modules/module.injector");
const auth_injector_1 = require("../auth/auth.injector");
class Injector {
    static get Container() {
        // this.registerInjections();
        return Injector._container;
    }
    static registerInjections() {
        auth_injector_1.AuthInjector.registerInjections(Injector.Container);
        module_injector_1.ModuleInjector.registerInjections(Injector.Container);
    }
}
exports.Injector = Injector;
Injector._container = tsyringe_1.container;
//# sourceMappingURL=injector.js.map