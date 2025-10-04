import Container from "../Layout/Container";
import Message from "./Message";

const Conversation = () => {
  return (
    <div className="min-h-[74vh] max-h-[74px] h-full p-3 overflow-y-auto">
      <Container>
        <div className="flex flex-col gap-2 justify-between">
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="left"
          ></Message>
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="right"
          ></Message>
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="left"
          ></Message>
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="right"
          ></Message>
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="left"
          ></Message>
          <Message
            text="Hi there! 👋 I'm your friendly assistant. How can I help you today?"
            date="2025-09-05T15:30:00.000Z"
            position="right"
          ></Message>
        </div>
      </Container>
    </div>
  );
};

export default Conversation;
