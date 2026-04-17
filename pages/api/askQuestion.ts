import { NextApiRequest, NextApiResponse } from "next";
import query from "@/lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { Message } from "@/typings";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!chatId) {
    return res.status(400).json({ answer: "Please provide a valid chat ID!" });
  }

  if (!prompt) {
    return res.status(400).json({ answer: "Please provide a prompt!" });
  }
  //ChatGPT Query

  try {
    const response = await query(prompt, chatId, model);

    const message: Message = {
      text:
        typeof response === "undefined" || response === null
          ? "Sorry, ChatGPT could not find an answer!"
          : response,
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "/chatgpt-logo.png",
      },
    };

    await adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    res.status(200).json({ answer: message.text });
  } catch (error: any) {
    console.error("DETAILED ERROR IN askQuestion:", error?.response?.data || error.message || error);
    res.status(500).json({ error: error.message || "Something went wrong!" });
  }
}
