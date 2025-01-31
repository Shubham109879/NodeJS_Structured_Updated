"use strict";
// import { Sequelize } from "sequelize";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_config_1 = require("../sequelize.config");
const sequelize_1 = require("sequelize");
const address_model_1 = require("./address.model");
const auth_types_1 = require("../../../../auth/auth.types");
exports.Student = sequelize_config_1.sq.define("Student", {
    id: {
        //  type: DataTypes.UUID,
        //  defaultValue: DataTypes.UUIDV4,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        //  allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    roles: {
        type: sequelize_1.DataTypes.ENUM,
        values: Object.values(auth_types_1.Roles),
        defaultValue: auth_types_1.Roles.STUDENT,
    }
}, {
    timestamps: false
});
exports.Student.belongsTo(address_model_1.Address);
sequelize_config_1.sq.sync().then(() => {
    console.log('Student table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
//# sourceMappingURL=student.model.js.map