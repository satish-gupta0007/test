"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLize = void 0;
const sequelize_1 = require("sequelize");
const config_json_1 = require("./config.json");
// Database Configuration
const _db_config = {
    host: config_json_1.ENV.DB_HOST,
    user: config_json_1.ENV.DB_USER,
    password: config_json_1.ENV.DB_PASSWORD,
    dialect: config_json_1.ENV.DB_DIALECT || 'mariadb',
    database: config_json_1.ENV.DB_NAME,
    logging: JSON.parse(config_json_1.ENV.DB_LOGGING.toLowerCase()),
    timezone: config_json_1.ENV.DB_TIMEZONE || "Etc/GMT0"
};
// Sequlize connection
const SQLize = new sequelize_1.Sequelize(_db_config.database, _db_config.user, _db_config.password, {
    dialect: _db_config.dialect,
    host: _db_config.host,
    dialectOptions: {
        timezone: _db_config.timezone
    },
    logging: _db_config.logging || false,
});
exports.SQLize = SQLize;
// Tryuing to get model from current database connection
SQLize["getModel"] = (modelName) => {
    let allModels = Object.keys(SQLize.models);
    let modelIndex = allModels.findIndex(extModel => extModel == modelName);
    if (modelIndex > -1 && SQLize.modelManager.models.length >= modelIndex) {
        return SQLize.modelManager.models[modelIndex];
    }
    return false;
};
// Test and authenticate connection on app start.
SQLize.authenticate().then((result) => {
    console.log('Sequelize connection has been established successfully.');
}).catch((err) => {
    console.log('Sequelize connection not working.');
    console.log(err.message || err.msg || err);
});
