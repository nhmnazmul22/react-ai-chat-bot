import { useContext } from "react";
import ConversationContext from "../context/ConversationContext";

const useConversationContext = () => {
  const { loading, setLoading, messages, handleAddNewMessage } =
    useContext(ConversationContext);

  return { loading, setLoading, messages, handleAddNewMessage };
};

export default useConversationContext;
