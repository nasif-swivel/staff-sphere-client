import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="fixed w-full h-16 px-6 bg-gray-100 border border-gray-300 shadow-md text-gray-700 flex items-center justify-between z-50">
      <Link href="/">Staff Sphere</Link>
    </nav>
  );
};

export default Header;
