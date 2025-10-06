import useConversationContext from "../../hooks/useConversationContext";
import Container from "../Layout/Container";
import Message from "./Message";

const Conversation = () => {
  const { messages, loading } = useConversationContext();
  return (
    <div className="min-h-[80vh] max-h-[80vh] h-full p-3 overflow-y-auto">
      <Container>
        <div className="flex flex-col gap-5 justify-between">
          {messages.length > 0 &&
            messages.map((message, index) => {
              if (message.type === "user") {
                return (
                  <Message
                    key={index}
                    text={message.text}
                    date={message.date.toISOString()}
                    position="right"
                  ></Message>
                );
              }

              if (message.type === "ai") {
                return (
                  <Message
                    key={index}
                    text={message.text}
                    date={message.date.toISOString()}
                    position="left"
                  ></Message>
                );
              }
            })}
          {loading && (
            <Message text={"Thinking...."} date="" position="left"></Message>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Conversation;
