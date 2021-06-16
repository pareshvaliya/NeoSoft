import { Sequelize} from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.DATA_BASE);

const dbname:string=process.env.DATA_BASE || "userinfo";
const username:string=process.env.DB_USERNAME || "paresh";
const password:string=process.env.DB_PASSWORD || "Paresh@1606";
const host:string=process.env.HOST || "localhost";
// const mydialect:string=process.env.DIALECT || 'mysql';

const sequelize: Sequelize = new Sequelize(dbname,username,password, {
    host: host,
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});

export default sequelize;