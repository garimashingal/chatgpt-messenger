"use client";

import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();
  const userEmail = session?.user?.email;

  if (!userEmail) return null;
  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", userEmail, "chats"), {
      createdAt: serverTimestamp(),
      userId: session?.user?.email,
    });
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div className="w-full chatRow" onClick={createNewChat}>
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}
