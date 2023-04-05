"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const dbsecret_1 = require("./dbsecret");
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};
const db = new Sequelize(dbsecret_1.DB_NAME, dbsecret_1.DB_USER, dbsecret_1.DB_PASS, DB_CONFIG);
function hasConection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.authenticate();
            console.log('Oba! Temos conexão com Banco de Dados!');
        }
        catch (error) {
            console.error('Deu ruim no Banco de Dados, chama o batman!');
        }
    });
}
Object.assign(db, {
    hasConection
});
module.exports = db;
