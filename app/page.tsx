import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXT */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Himanshu Ranjan</h1>
          <p className="mt-3 text-lg text-gray-600">
            Backend Engineer | Java | System Design
          </p>

          <p className="mt-4 text-gray-700">
            I build scalable backend systems and write about system design,
            distributed systems, and real-world engineering problems.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/projects"
              className="bg-black text-white px-5 py-2 rounded-lg"
            >
              View Projects
            </a>
            <a
              href="/blog"
              className="border border-gray-300 px-5 py-2 rounded-lg"
            >
              Read Blog
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile.png"
            alt="Himanshu"
            width={250}
            height={250}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold">
              Movie Ticket Booking System
            </h3>
            <p className="text-gray-600 mt-2">
              Designed a scalable system handling concurrent bookings and seat
              allocation with consistency.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold">
              Package Installation System
            </h3>
            <p className="text-gray-600 mt-2">
              Built dependency resolution system with graph traversal and retry
              mechanisms.
            </p>
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p className="text-gray-600">
          Writing about Kafka, concurrency, and system design.
        </p>
      </section>

    </main>
  );
}