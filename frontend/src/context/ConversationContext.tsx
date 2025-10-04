import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { MessageType } from "../type";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  messages: MessageType[];
  handleAddNewMessage: (newMessage: MessageType) => void;
};

const ConversationContext = createContext<ContextType>({
  loading: false,
  setLoading: () => {},
  messages: [],
  handleAddNewMessage: () => {},
});

export const ConversationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddNewMessage = (newMessage: MessageType) => {
    const newMessages = [...messages, newMessage];
    console.log("newMessages", newMessages);
    setMessages(newMessages);
  };

  console.log("message", messages);
  return (
    <ConversationContext.Provider
      value={{ loading, setLoading, messages, handleAddNewMessage }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationContext;
