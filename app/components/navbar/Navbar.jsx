import React from "react";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { Convergence } from "next/font/google";

const conv = Convergence({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  return (
    <nav className={conv.className}>
      <div className="d-flex justify-content-between bg-color px-5">
        <Link href={"/"}><Image className="logo" src={logo} alt="logo-img" /></Link>
        <div className="d-flex align-items-center column-gap-4">
          <a href="#desc" className="font-color">
            About
          </a>
          <a href="#footer" className="border-1 rounded-pill px-3 py-2 color">
            Say Hello
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
