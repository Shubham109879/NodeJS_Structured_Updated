import 'reflect-metadata';
import { DependencyContainer } from 'tsyringe';
// import { CommunicationInjector } from './communication/communication.injector';
// import { EhrInjector } from './ehr/ehr.injector';
// import { FileStorageInjector } from './storage/file.storage.injector';
import { StudentRepo } from '../database/sql/sequelize/repositories/student/student.repo';
import { AddressRepo } from '../database/sql/sequelize/repositories/address/address.repo';

////////////////////////////////////////////////////////////////////////////////

export class ModuleInjector {

    static registerInjections(container: DependencyContainer) {
    
        container.register('IStudentRepo',StudentRepo);
        container.register('IAddressRepo',AddressRepo);
        

    }

}
