"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_mongodb_1 = require("feathers-mongodb");
class Sistema extends feathers_mongodb_1.Service {
    constructor(options, app) {
        super(options);
        const client = app.get('mongoClient');
        client.then(db => {
            this.Model = db.collection('sistemas');
        });
    }
}
exports.Sistema = Sistema;
;
