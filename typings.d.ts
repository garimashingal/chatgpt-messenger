interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp | FieldValue | null;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
import admin from "firebase-admin";
