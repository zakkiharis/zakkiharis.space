import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: 'blog-27bf6',
            privateKey: process.env.FIREBASE_PRIVATE_KEY
                ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
                : undefined,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }),
        databaseURL: 'https://blog-27bf6-default-rtdb.firebaseio.com',
    });
}

export default admin.database();