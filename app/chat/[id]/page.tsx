import ChatInput from "@/component/ChatInput";
import Chat from "@/component/Chat";

type Props = {
  params: {
    id: string;
  };
};

export default async function ChatPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="flex flex-col h-screen text-white py-5">
      {/* Chat */}
      <Chat chatId={id} />
      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
}
