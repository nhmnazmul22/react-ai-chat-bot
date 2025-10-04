import Conversation from "./components/Conversation/Conversation";
import Layout from "./components/Layout/Layout";
import { ConversationContextProvider } from "./context/ConversationContext";

function App() {
  return (
    <ConversationContextProvider>
      <Layout>
        <Conversation></Conversation>
      </Layout>
    </ConversationContextProvider>
  );
}

export default App;
