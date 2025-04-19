import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas-note", "root", "", {
  host: "34.16.112.182",
  dialect: "mysql",
});

export default db;
