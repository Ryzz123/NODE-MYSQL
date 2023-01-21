import { Sequelize } from "sequelize";

const db = new Sequelize(
    'study_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: "mysql"
    }
);

export default db;