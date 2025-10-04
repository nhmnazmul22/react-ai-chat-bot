import { BotMessageSquare, User } from "lucide-react";

type Props = {
  text: string;
  date: string;
  position: string;
};

const Message = ({ text = "", date = "", position = "left" }: Props) => {
  return (
    <div
      className={`${
        position === "left" ? "bg-gray-100 me-auto" : "bg-gray-50 ms-auto"
      } p-3 rounded-2xl border border-gray-100 max-w-sm`}
    >
      <div className="flex gap-2 items-start">
        {position === "left" && (
          <div className="bg-blue-500 text-white rounded-full p-1">
            <BotMessageSquare size={16} />
          </div>
        )}
        {position === "right" && (
          <div className="bg-blue-500 text-white rounded-full p-1">
            <User size={16} />
          </div>
        )}
        <div>
          <p className="text-xs font-light">{text}</p>
          <span className="text-[10px] text-gray-600 font-light">
            {new Date(date).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
