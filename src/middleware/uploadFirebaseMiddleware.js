import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: {
        fieldSize: 5 * 1024 * 1024, // 5 MB como límite de subida
    }
});

export default upload;