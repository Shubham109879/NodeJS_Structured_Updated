"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sq = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sq = new sequelize_1.Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.sq.authenticate().then(() => {
    console.log("Connected Successfully");
}).catch((error) => {
    console.log("Unable to connect");
});
//# sourceMappingURL=sequelize.config.js.map