"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sistema_class_1 = require("./sistema.class");
const sistema_hooks_1 = __importDefault(require("./sistema.hooks"));
function default_1(app) {
    const paginate = app.get('paginate');
    const options = {
        paginate
    };
    // Initialize our service with any options it requires
    app.use('/sistema', new sistema_class_1.Sistema(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('sistema');
    service.hooks(sistema_hooks_1.default);
}
exports.default = default_1;
