"use client";
type ChatProps = { chatId: string };
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

function Chat({ chatId }: ChatProps) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [messages] = useCollection(
    session &&
      query(
        collection(db, "users", userEmail!, "chats", chatId, "messages"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="text-center text-white mt-10">
            Type a prompt in below to get started!!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mt-5 text-white mx-auto animate-bounce" />
        </>
      )}
      {messages?.docs?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Chat;
