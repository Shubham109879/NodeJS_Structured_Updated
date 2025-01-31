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
exports.AddressRepo = void 0;
const address_model_js_1 = require("../../models/address.model.js");
class AddressRepo {
    constructor() {
        this.getAddressById = (id) => __awaiter(this, void 0, void 0, function* () {
            const address = yield address_model_js_1.Address.findByPk(id);
            return address;
        });
        this.getAddresses = (req) => __awaiter(this, void 0, void 0, function* () {
            const addresses = yield address_model_js_1.Address.findAll({});
            return addresses;
        });
        this.createAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = yield address_model_js_1.Address.create({
                city: req.body.city,
            });
            return address;
        });
        this.updateAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = yield address_model_js_1.Address.findByPk(req.params.id);
            if (address != null) {
                address.set("city", req.body.city);
                yield address.save();
            }
            return address;
        });
        this.deleteAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            const address = yield address_model_js_1.Address.destroy({
                where: {
                    id: req.params.id,
                }
            });
            return address;
        });
    }
}
exports.AddressRepo = AddressRepo;
//# sourceMappingURL=address.repo.js.map