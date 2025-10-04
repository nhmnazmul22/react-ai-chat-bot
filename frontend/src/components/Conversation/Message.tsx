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
      } py-3 px-8 rounded-full border border-gray-100 max-w-sm`}
    >
      <p className="text-xs font-light">{text}</p>
      <span className="text-[10px] text-gray-600 font-light">
        {new Date(date).toLocaleString()}
      </span>
    </div>
  );
};

export default Message;
