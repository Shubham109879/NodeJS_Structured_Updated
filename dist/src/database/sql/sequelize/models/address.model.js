"use strict";
// import { Sequelize } from "sequelize";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const sequelize_config_1 = require("../sequelize.config");
const sequelize_1 = require("sequelize");
exports.Address = sequelize_config_1.sq.define("Address", {
    id: {
        //   type: DataTypes.UUID,
        //   defaultValue: DataTypes.UUIDV4,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        //  allowNull: false
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
});
sequelize_config_1.sq.sync().then(() => {
    console.log('Address table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
//# sourceMappingURL=address.model.js.map