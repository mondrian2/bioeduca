import { Application } from '../declarations';
import uploadRes from './upload-res';
import multer from 'multer';
import path from 'path';

const allowedExtentions = ['.png', '.jpeg', '.jpg']
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null,'public/uploads'),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
})

const upload = multer({
  storage,
  limits:{
    fieldSize: 1000
  },
  fileFilter: (req, file, cb) =>cb(null, allowedExtentions.includes(path.extname(file.originalname)))
})

export default function (app: Application) {
  app.post('/upload', upload.array('files'), uploadRes());
}
