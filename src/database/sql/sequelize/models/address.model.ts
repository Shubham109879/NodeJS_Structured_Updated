// import { Sequelize } from "sequelize";

import { sq } from "../sequelize.config";
import { DataTypes } from "sequelize";


export const Address = sq.define("Address", {
   id: {
   //   type: DataTypes.UUID,
   //   defaultValue: DataTypes.UUIDV4,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true,
    //  allowNull: false
   },
   city: {
     type: DataTypes.STRING,
     allowNull: false
   },
});

sq.sync().then(() => {
    console.log('Address table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

