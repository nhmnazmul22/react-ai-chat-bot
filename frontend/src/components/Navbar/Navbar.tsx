import { MessageCircle } from "lucide-react";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-gray-200 bg-slate-50 h-[75px]">
      <Container>
        <div className="flex gap-2 items-center">
          <div className="bg-linear-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-full">
            <MessageCircle size={24} />
          </div>
          <div className="space-y-5">
            <h2 className="text-lg leading-0 font-semibold">
              Friendly Chatbot
            </h2>
            <p className="text-xs leading-0 font-normal text-gray-600">
              Always here to help! ✨
            </p>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
