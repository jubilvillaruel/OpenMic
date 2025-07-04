'use client';

import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="bg-[#0a0a0a] shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="relative w-28 h-12">
          <Image
            src="/logo.svg"  
            alt="OpenMic"
            fill
            priority
            className='object-contain'
          />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/gigs" className="text-[#d5d4d4] hover:text-blue-600 transition">
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

          <li>
            <Link href="/auth/signup" className="text-[#d5d4d4]  hover:text-blue-600 transition">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
