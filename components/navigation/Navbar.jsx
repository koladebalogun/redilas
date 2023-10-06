import Link from 'next/link';
import React from 'react'
import Navigation from './NavigationMenu'

export default function Navbar() {
  return (
    <nav>
      <div className="site-nav">
        <div className="site-logo">
          <Link href="#">Logo</Link>
        </div>

        <div className="menu-toggle">
            <h2>Menu</h2>
        </div>
      </div>
    </nav>
  );
}
