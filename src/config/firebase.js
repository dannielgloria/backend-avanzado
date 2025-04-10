import admin from 'firebase-admin';
import { firebaseStorage, googleCredentials } from './constants.js'

import serviceAccount from '../../backend-avanzado-cac5a-firebase-adminsdk-fbsvc-5cf2653750.json' with { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: firebaseStorage,
})

export const bucket = admin.storage().bucket();