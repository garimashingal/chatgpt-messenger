"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Message } from "../typings";
import { db } from "../firebase";
import toast from "react-hot-toast";
import ChatModels from "./ChatModels";
import useSWR from "swr";

type Props = { chatId: string };

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState<string>("");
  const session = useSession();
  const userEmail = session.data?.user?.email;
  const userName = session.data?.user?.name;
  const userImage = session.data?.user?.image;
  console.log("User Image:", userImage);

  //useSWR to get the model
  const { data: model } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo",
  });

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt.trim()) return;
    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: userEmail!,
        name: userName!,
        avatar:
          userImage! ||
          `https://ui-avatars.com/api/?name=${session?.data?.user?.name}`,
      },
    };

    // Here you would typically add the message to your database

    await addDoc(
      collection(db, "users", userEmail!, "chats", chatId, "messages"),
      message
    );

    const notification = toast.loading("Thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session: session.data,
      }),
    }).then(() => {
      // Toast notification for success can be added here
      toast.success("ChatGPT has responded!", { id: notification });
    });
  };
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg mb-2 mx-2 text-sm">
      <form className="flex p-5 space-x-5" onSubmit={sendMessage}>
        <input
          type="text"
          value={prompt}
          placeholder="Type your message..."
          className="border border-black bg-white text-gray-700 w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(e) => setPrompt(e.target.value)}
          disabled={!session}
        />
        <button
          className="flex items-center space-x-4"
          title="submit"
          type="submit"
          disabled={!session || !prompt}
        >
          <PaperAirplaneIcon className="h-10 w-10 text-gray-300 hover:text-gray-400 cursor-pointer -rotate-45 disabled:text-gray-50 disabled:cursor-not-allowed rounded-full p-3 bg-[#11a37f]" />
        </button>
      </form>

      <div className="md:hidden">
        <ChatModels />
      </div>
    </div>
  );
}

export default ChatInput;
