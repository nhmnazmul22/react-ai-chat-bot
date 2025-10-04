import { MessageCircle } from "lucide-react";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <nav className="py-3 border-b border-gray-200 bg-slate-50">
      <Container>
        <div className="flex gap-2 items-center">
          <div className="bg-linear-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full w-[45px] h-[45px] flex justify-center items-center">
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
