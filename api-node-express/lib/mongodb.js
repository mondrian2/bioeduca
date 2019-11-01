"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const mongodb_core_1 = require("mongodb-core");
const mongodb_1 = require("mongodb");
const logger = require('./logger');
function default_1(app) {
    const config = app.get('mongodb');
    const promise = mongodb_1.MongoClient.connect(config, { useNewUrlParser: true }).then(client => {
        const dbName = mongodb_core_1.parseConnectionString(config, () => { });
        return client.db(dbName);
    }).catch(error => {
        logger.error(error);
    });
    app.set('mongoClient', promise);
}
exports.default = default_1;
