"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ---------- HOOK: detect scroll visibility ---------- */
function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, visible };
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState<number | null>(null);

  /* persist theme */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const { ref: timelineRef, visible: timelineVisible } = useInView();
  const { ref: skillsRef, visible: skillsVisible } = useInView();

  return (
    <main
      className={`min-h-screen px-6 py-12 transition-all duration-500 ${
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

        <p className="mt-4 text-lg text-gray-400">
          I build backend systems that don’t break when things get real.
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center gap-6">

          <a href="mailto:himanshu.hr.ranjan@gmail.com">
            <Image src="/gmail.png" alt="email" width={28} height={28} />
          </a>

          <a href="https://linkedin.com/in/himanshuthehr" target="_blank">
            <Image src="/linkedin.png" alt="linkedin" width={28} height={28} />
          </a>

          <a href="https://leetcode.com/u/himanshuthehr" target="_blank">
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
              className={`p-5 border rounded-xl transition ${
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

      {/* TIMELINE */}
      <section ref={timelineRef} className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-8">Where it all came from</h2>

        <div className="relative border-l-2 border-gray-700 pl-6">
          {[
            "Engineering → discovered software",
            "Accenture → real-world systems",
            "Synchrony → scaling distributed systems",
          ].map((item, i) => (
            <div
              key={i}
              className={`mb-10 transition-all duration-700 ${
                timelineVisible ? "opacity-100" : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I’ve worked on</h2>

        <div className="grid gap-6">
          {[
            "High-traffic API systems",
            "Event-driven architecture",
            "System resilience",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl bg-gray-800 hover:shadow-xl transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillsRef} className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I’m strong at</h2>

        {[
          { name: "Java & Backend", level: "90%" },
          { name: "System Design", level: "85%" },
          { name: "Distributed Systems", level: "85%" },
          { name: "Kafka & Event Systems", level: "80%" },
        ].map((skill, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm mb-1">{skill.name}</p>
            <div className="w-full h-2 bg-gray-700 rounded">
              <div
                className="h-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{ width: skillsVisible ? skill.level : "0%" }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* THINKING */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I think about</h2>

        <ul className="space-y-3 text-gray-400">
          <li>→ Why systems break at scale</li>
          <li>→ Designing APIs that survive real traffic</li>
          <li>→ Why some systems degrade gracefully while others collapse</li>
          <li>→ Trade-offs in distributed systems</li>
        </ul>
      </section>

      {/* EXPLORING */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Currently exploring</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Scaling microservices",
            "Advanced Kafka patterns",
            "High availability systems",
            "API performance tuning",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg bg-gray-800 hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s connect</h2>

        <a
          href="mailto:himanshu.hr.ranjan@gmail.com"
          className="text-blue-400 hover:underline"
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