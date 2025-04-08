import path from "path";
import { bucket } from "../config/firebase.js";

export const uploadFileFirebase = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded'});
    }

    const fileName = Date.now()+'-'+req.file.origialname;
    const file = bucket.file(fileName)

    const stream = file.createWriteStream({
        metadata: { contentType: req.file.mimetype }
    });
    
    stream.on('error', (err) => {
        console.error(err);
        res.status(500).json({ message: 'File upload error', error: err.message});
    })

    stream.on('finish', async () => {
        await file.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

        res.status(200).json({
            message: 'File uploaded successfully',
            url: publicUrl,
        })
    })

    stream.end(req.file.buffer);
}

export const uploadLocalFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded'});
    }

    res.status(201).json({
            message: 'Archivo subido con éxito.',
            filename: req.file.filename,
            path: req.file.path,
        })
}