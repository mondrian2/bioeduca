"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_res_1 = __importDefault(require("./upload-res"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const allowedExtentions = ['.png', '.jpeg', '.jpg'];
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads'),
    filename: (req, file, cb) => cb(null, `${file.originalname}`)
});
const upload = multer_1.default({
    storage,
    limits: {
        fieldSize: 1000
    },
    fileFilter: (req, file, cb) => cb(null, allowedExtentions.includes(path_1.default.extname((file.originalname).trim())))
});
function default_1(app) {
    app.post('/upload', upload.array('files'), upload_res_1.default());
}
exports.default = default_1;
