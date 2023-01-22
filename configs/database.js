import { Sequelize } from "sequelize";

const db = new Sequelize(
    'bmsdprxryuh30lfyshnp',
    'uva1e5gdi7ii3qhw',
    'dT0txAeCLSiKihHxuk9h',
    {
        host: 'bmsdprxryuh30lfyshnp-mysql.services.clever-cloud.com',
        dialect: "mysql",
        port: 3306
    }
);

export default db;