import type React from "react";
import Navbar from "../Navbar/Navbar";
import InputContainer from "../InputContainer/InputContainer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <InputContainer></InputContainer>
    </>
  );
};

export default Layout;
