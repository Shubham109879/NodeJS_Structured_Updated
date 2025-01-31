"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleInjector = void 0;
require("reflect-metadata");
// import { CommunicationInjector } from './communication/communication.injector';
// import { EhrInjector } from './ehr/ehr.injector';
// import { FileStorageInjector } from './storage/file.storage.injector';
const student_repo_1 = require("../database/sql/sequelize/repositories/student/student.repo");
const address_repo_1 = require("../database/sql/sequelize/repositories/address/address.repo");
////////////////////////////////////////////////////////////////////////////////
class ModuleInjector {
    static registerInjections(container) {
        container.register('IStudentRepo', student_repo_1.StudentRepo);
        container.register('IAddressRepo', address_repo_1.AddressRepo);
    }
}
exports.ModuleInjector = ModuleInjector;
//# sourceMappingURL=module.injector.js.map