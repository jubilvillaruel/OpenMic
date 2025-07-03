'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#0a0a0a] shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0FAC7D]">
          OpenMic
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/gigs" className="text-[#d5d4d4] hover:text-[blue-600 ]transition">
              Gigs
            </Link>
          </li>
          <li>
            <Link href="/musicians" className="text-[#d5d4d4]  hover:text-blue-600 transition">
              Musicians
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="text-[#d5d4d4]  hover:text-blue-600 transition">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
