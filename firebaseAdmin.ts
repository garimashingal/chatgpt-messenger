import admin from "firebase-admin";
import { getApps, initializeApp, cert } from "firebase-admin/app";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}",
) as admin.ServiceAccount;

if (!getApps().length) {
  if (!serviceAccount || !Object.keys(serviceAccount).length) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY is not set. Add it to your environment variables.",
    );
  }

  initializeApp({
    credential: cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
