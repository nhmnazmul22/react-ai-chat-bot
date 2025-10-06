import { Send } from "lucide-react";
import Container from "../Layout/Container";
import { type FormEvent } from "react";
import useConversationContext from "../../hooks/useConversationContext";
import type { MessageType } from "../../type";

const InputContainer = () => {
  const { setLoading, handleAddNewMessage } = useConversationContext();

  const handleAiResponse = (messageObj: MessageType) => {
    if (messageObj) {
      const aiPromise: Promise<MessageType> = Promise.resolve({
        type: "ai",
        text: "Hello World from ai",
        date: new Date(Date.now()),
      });

      const data = aiPromise.then((res) => res);
      return data;
    }
  };

  const handleAiMessageSend = async (messageObj: MessageType) => {
    setLoading(true);
    setTimeout(async () => {
      const aiMessage = await handleAiResponse(messageObj);
      if (aiMessage) {
        handleAddNewMessage(aiMessage);
        setLoading(false);
      }
    }, 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = (form.elements.namedItem("message") as HTMLInputElement)
      ?.value;
    const messageObj: MessageType = {
      type: "user",
      text: message,
      date: new Date(Date.now()),
    };

    form.reset();
    handleAddNewMessage(messageObj);
    handleAiMessageSend(messageObj);
  };

  return (
    <div className="bg-slate-50 border-t border-gray-200 h-[75px] py-4">
      <Container>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            name="message"
            className="flex-1 bg-white px-4 outline-0 border border-gray-200 rounded-full text-sm"
          />
          <button
            type="submit"
            className="bg-linear-to-r from-cyan-500 to-blue-500 p-2 text-white rounded-full"
          >
            <Send size={22} />
          </button>
        </form>
      </Container>
    </div>
  );
};

export default InputContainer;
