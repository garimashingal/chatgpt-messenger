import { ChatBubbleLeftIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, query } from "firebase/firestore";
import { db } from "@/firebase";
import { orderBy } from "firebase/firestore";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const router = useRouter();

  const [messages] = useCollection(
    query(
      collection(db, "users", userEmail!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  // Compute active state directly instead of using useEffect and setState
  const active = pathname === `/chat/${id}`;

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", userEmail!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      className={`chatRow justify-center${active ? " bg-gray-700/50" : ""}`}
      href={`/chat/${id}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 hover:text-red-700" onClick={deleteChat} />
    </Link>
  );
}

export default ChatRow;
