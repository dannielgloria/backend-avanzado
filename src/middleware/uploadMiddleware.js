import multer from "multer";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirmane(__filename)

// Definimos almacenamiento local
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, '../../uploads/'));
    },
    filename: (req, file, cb) =>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); // 0-999999999
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});

const upload = multer({
    storage,
    limits: {
        fieldSize: 5 * 1024 * 1024, // 5 MB como límite de subida
    },
    fileFilter: (req, file, cb)=>{
        const filetypes = /jpeg|jpg|png|pdf|doc|docx/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true)
        }
        cb(new Error('Tipop de archivo no permitido'))
    }
});

export default upload;