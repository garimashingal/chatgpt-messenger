type ChatProps = { chatId: string };

function Chat({ chatId }: ChatProps) {
  return <div className="flex-1 ">Chat {chatId}</div>;
}

export default Chat;
