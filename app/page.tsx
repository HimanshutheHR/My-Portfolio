"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved) setDark(saved === "dark");
}, []);

useEffect(() => {
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);
  const [active, setActive] = useState<number | null>(null);

  return (
    <main
      className={`min-h-screen px-6 py-12 transition ${
        dark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900"
      }`}
    >
      {/* DARK MODE TOGGLE */}
      <div className="max-w-4xl mx-auto flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          className="text-sm px-4 py-1 border rounded-lg hover:opacity-70"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center mt-6">

        {/* PROFILE */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30 rounded-full"></div>
            <Image
              src="/profile.png"
              alt="Himanshu"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-xl relative"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Hi, I’m Himanshu
        </h1>

        <p className={`${dark ? "text-gray-300" : "text-gray-600"} mt-4`}>
          I build backend systems that don’t break when things get real.
        </p>

        {/* SOCIAL LINKS */}
        <div className="mt-6 flex justify-center gap-6">

          {/* EMAIL */}
          <a
            href="mailto:himanshu.hr.ranjan@gmail.com"
            className="hover:scale-110 transition"
          >
            <Image src="/gmail.png" alt="email" width={28} height={28} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/himanshuthehr"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Image src="/linkedin.png" alt="linkedin" width={28} height={28} />
          </a>

          {/* LEETCODE */}
          <a
            href="https://leetcode.com/u/himanshuthehr"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Image src="/leetcode.png" alt="leetcode" width={28} height={28} />
          </a>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">My Journey</h2>

        <div className="space-y-6">
          {[
            {
              title: "Started with curiosity",
              desc: "I began with Java and got curious about how real systems behave beyond code.",
            },
            {
              title: "Learned by breaking things",
              desc: "Debugging failures taught me more than writing perfect code ever could.",
            },
            {
              title: "Moved to distributed systems",
              desc: "Worked with APIs, Kafka, and microservices where scale and failures matter.",
            },
            {
              title: "Now",
              desc: "Focused on building systems that are reliable under real-world conditions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`p-5 border rounded-xl transition cursor-pointer ${
                active === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : dark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white"
              }`}
            >
              <h3 className="font-semibold">{item.title}</h3>
              {active === index && (
                <p className="mt-2 text-sm opacity-90">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I THINK ABOUT */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I think about</h2>

        <ul className={`${dark ? "text-gray-300" : "text-gray-700"} space-y-3`}>
          <li>→ Why systems break at scale (and how to prevent it)</li>
          <li>→ Designing APIs that don’t collapse under real traffic</li>
          <li>→ Why some systems degrade gracefully while others collapse</li>
          <li>→ Trade-offs: speed vs consistency vs reliability</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s connect</h2>

        <a
          href="mailto:himanshu.hr.ranjan@gmail.com"
          className="text-blue-500 hover:underline"
        >
          himanshu.hr.ranjan@gmail.com
        </a>
      </section>

      {/* FOOTER */}
      <section className="mt-16 text-center text-gray-500 text-sm">
        Built with curiosity 🚀
      </section>
    </main>
  );
}