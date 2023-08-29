import React from "react";
import Header from "@/components/layout/header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full relative min-h-screen">
      <Header />
      <div className="layout-children">{children}</div>
    </div>
  );
};

export default Layout;
