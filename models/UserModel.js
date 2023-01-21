import { Sequelize } from "sequelize";
import db from "../configs/database.js";

const {DataTypes} = Sequelize;

export const Mahasiswa = db.define('mahasiswa', {
    name: DataTypes.STRING,
    npm: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    freezeTableName: true
});

export const Prodi = db.define('prodi', {
    prodi: DataTypes.STRING,
    prodiId: DataTypes.STRING
}, {
    freezeTableName: true
});

Mahasiswa.belongsTo(Prodi, {foreignKey: 'prodiId', targetKey: 'id'});
Prodi.hasMany(Mahasiswa, {foreignKey: 'prodiId', sourceKey: 'id'});

(async () => {
    await db.sync();
})();