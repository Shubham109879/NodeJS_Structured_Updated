import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


export const sq=new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sq.authenticate().then(()=>{
    console.log("Connected Successfully");
}).catch((error)=>{
    console.log("Unable to connect");
});
