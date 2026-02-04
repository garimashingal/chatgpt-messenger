import { DocumentData } from "firebase/firestore";

type MessageProps = { message: DocumentData };

function Message({ message }: MessageProps) {
  const isChatGPT = message.data().user._id === "ChatGPT";
  return (
    <div className={`text-white ${isChatGPT && "bg-[#434654]"} rounded-lg`}>
      <div className="p-4 flex space-x-5 px-10 max-w-4xl mx-auto">
        <img
          src={message?.data().user?.avatar}
          alt={message?.data().user?.name}
          className="h-8 w-8 rounded-full mb-2"
        />
        {/* <h4 className="font-bold">{message?.data().user?.name}</h4> */}
        <p>{message.data().text}</p>
      </div>
    </div>
  );
}

export default Message;
