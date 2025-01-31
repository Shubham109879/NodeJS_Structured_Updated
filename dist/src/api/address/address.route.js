"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAddress = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const address_controller_1 = require("./address.controller");
const registerAddress = (app) => {
    const addressRouter = express_1.default.Router();
    const controller = new address_controller_1.AddressController();
    addressRouter.get('/all', controller.get);
    addressRouter.get('/:id', controller.getById);
    addressRouter.post('/', controller.create);
    addressRouter.put('/:id', controller.update);
    addressRouter.delete('/:id', controller.del);
    app.use(express_1.default.json());
    app.use('/api/v1/address', addressRouter);
};
exports.registerAddress = registerAddress;
//# sourceMappingURL=address.route.js.map