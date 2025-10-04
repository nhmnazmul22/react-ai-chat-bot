import { Send } from "lucide-react";
import Container from "../Layout/Container";

const InputContainer = () => {
  return (
    <div className="bg-slate-50 p-3">
      <Container>
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-white px-4 outline-0 border border-gray-200 rounded-full text-sm"
          />
          <button className="bg-linear-to-r from-cyan-500 to-blue-500 p-2 text-white rounded-full flex justify-center items-center w-[45px] h-[45px]">
            <Send />
          </button>
        </form>
      </Container>
    </div>
  );
};

export default InputContainer;
