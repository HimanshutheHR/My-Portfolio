"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP LEFT BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 bg-gray-800 px-3 py-2 rounded-md shadow-md hover:bg-gray-700"
      >
        ☰
      </button>

      {/* OVERLAY BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDEBAR DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="mb-8 text-sm"
        >
          ✕ Close
        </button>

        <div className="space-y-6">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Blog
          </Link>

        </div>
      </div>
    </>
  );
}