import admin from "firebase-admin";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import serviceAccountJson from "./serviceAccountKey.json";

const serviceAccount = serviceAccountJson as admin.ServiceAccount;

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
