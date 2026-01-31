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
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!chatId) {
    return res.status(400).json({ answer: "Please provide a valid chat ID!" });
  }

  if (!prompt) {
    return res.status(400).json({ answer: "Please provide a prompt!" });
  }
  //ChatGPT Query

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
      avatar: "chatgpt-logo.png",
    },
  };

  console.log("Response from ChatGPT:", response);

  await adminDb
    .collection("users")
    .doc(session?.data?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
