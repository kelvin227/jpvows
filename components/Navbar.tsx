"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="font-serif text-lg">J & P</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/story">Story</Link>
          <Link href="/details">Details</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/rsvp">RSVP</Link>
        </div>
      </div>
    </nav>
  );
}