"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${
        open ? "w-56" : "w-16"
      } bg-gray-800 p-4 transition-all duration-300`}
    >
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-8 text-sm"
      >
        {open ? "←" : "→"}
      </button>

      <div className="space-y-6">

        <Link href="/" className="block hover:text-blue-400">
          {open ? "Home" : "🏠"}
        </Link>

        <Link href="/blog" className="block hover:text-blue-400">
          {open ? "Blog" : "📝"}
        </Link>

      </div>
    </div>
  );
}