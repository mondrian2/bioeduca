"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return (req, res, next) => {
        console.log('upload is runing');
        res.json(req.files);
        // next();
    };
};
