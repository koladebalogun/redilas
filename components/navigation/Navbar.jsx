import Link from "next/link";
import React from "react";
import Navigation from "./NavigationMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        {/* <div className="site-logo">
          <Link href="/">
            <Image src='/logo.jpg' width={120} height={40} />
          </Link>
        </div> */}

        <div className="menu-toggle">
          <Navigation />
        </div>
      </div>
    </nav>
  );
}
