import 'reflect-metadata';
import { DependencyContainer, container } from 'tsyringe';
import { ModuleInjector } from '../modules/module.injector';
import { AuthInjector } from '../auth/auth.injector';


export class Injector{

    private static _container: DependencyContainer = container;

    public static get Container(){
        // this.registerInjections();
        return Injector._container;
    }

    static registerInjections() {

        AuthInjector.registerInjections(Injector.Container);

        ModuleInjector.registerInjections(Injector.Container);
    }
}