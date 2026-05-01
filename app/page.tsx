"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 px-6 py-12">

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center relative">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-30 rounded-full"></div>
            <Image
              src="/profile.png"
              alt="Himanshu"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-xl relative"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hi, I’m Himanshu
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          I build backend systems that don’t break when things get real.
        </p>

        {/* LINKS */}
        <div className="mt-6 flex justify-center gap-6 text-sm">

          <a
            href="mailto:himanshu.hr.ranjan@gmail.com"
            className="hover:text-blue-600 transition"
          >
            📧 Email
          </a>

          <a
            href="https://linkedin.com/in/himanshuthehr"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/himanshuthehr"
            target="_blank"
            className="hover:text-purple-600 transition"
          >
            💻 LeetCode
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
              desc: "I began with Java and quickly got pulled into understanding how real systems work beyond just writing code.",
            },
            {
              title: "Learned by breaking things",
              desc: "Worked on enterprise systems, debugging failures, fixing edge cases, and understanding why systems fail in production.",
            },
            {
              title: "Moved to distributed systems",
              desc: "Started working with Kafka, APIs, and microservices — where scale, latency, and failures actually matter.",
            },
            {
              title: "Now",
              desc: "I focus on building systems that are reliable, scalable, and designed for real-world usage.",
            },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`p-5 border rounded-xl transition cursor-pointer ${
                active === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
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

      {/* WHAT I’M GOOD AT */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I’m good at</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Building scalable APIs",
              desc: "Designing APIs that handle high traffic and remain stable under pressure.",
            },
            {
              title: "Thinking in systems",
              desc: "Understanding trade-offs, bottlenecks, and how systems behave at scale.",
            },
            {
              title: "Handling failures",
              desc: "Retries, circuit breakers, idempotency — building for when things go wrong.",
            },
            {
              title: "Event-driven architecture",
              desc: "Designing Kafka-based systems with proper partitioning and flow.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl bg-white hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I THINK ABOUT */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I think about</h2>

        <ul className="space-y-3 text-gray-700">
          <li>→ Why systems fail in production</li>
          <li>→ Designing resilient microservices</li>
          <li>→ Why some systems degrade gracefully while others collapse</li>
          <li>→ Trade-offs in distributed systems</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s connect</h2>

        <p className="text-gray-600">
          If you’re building something interesting or want to discuss systems,
          feel free to reach out.
        </p>

        <a
          href="mailto:himanshu.hr.ranjan@gmail.com"
          className="mt-4 inline-block font-medium text-blue-600 hover:underline"
        >
          himanshu.hr.ranjan@gmail.com
        </a>
      </section>

      {/* FOOTER */}
      <section className="mt-16 text-center text-gray-400 text-sm">
        Built with curiosity and a lot of debugging 🚀
      </section>

    </main>
  );
}