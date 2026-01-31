"use client";

import ChatModels from "./ChatModels";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import { signOut, useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";

export default function Sidebar() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const [chats, loading, error] = useCollection(
    userEmail
      ? query(
          collection(db, "users", userEmail, "chats"),
          orderBy("createdAt", "asc")
        )
      : null
  );

  if (!userEmail) return null;

  return (
    <div className="p-2 flex flex-col h-screen bg-[#202123] text-white max-w-sm overflow-y-auto md:min-w-[20rem] ">
      <div className="flex-1">
        <div>
          {/* New Chat*/}
          <NewChat />
          <div>
            {/* Chat Models */}
            <ChatModels />
          </div>
          {/* Chat List */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          src={session.user?.image || " "}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full mb-2 mx-auto cursor-pointer hover:opacity-50"
          onClick={() => {
            signOut();
          }}
        />
      )}
    </div>
  );
}
