import React from "react";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo_fix.png";
import { Convergence } from 'next/font/google'

const conv = Convergence({ 
  subsets: ['latin'],
  weight: "400",
})

function Navbar() {

  return (
    <nav className={conv.className}>
      <div className="d-flex justify-content-between bg-color px-5 py-3">
        <Image src={logo} alt="logo-img" />
        <div className="d-flex align-items-center column-gap-4">
          <Link className="font-color" href={""}>About</Link>
          <Link href={""} className="border-1 rounded-pill px-3 py-2 color">Say Hello</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
