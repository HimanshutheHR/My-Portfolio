export default function Blog() {
  return (
    <main className="px-10 py-12">

      <h1 className="text-4xl font-bold mb-6">Writing</h1>

      <p className="text-gray-400 mb-10">
        Thoughts on backend systems, scalability, and engineering.
      </p>

      <div className="space-y-6">

        {[
          {
            title: "Kafka Backpressure Explained Simply",
            link: "https://medium.com/your-link-1",
          },
          {
            title: "Circuit Breaker in Java",
            link: "https://medium.com/your-link-2",
          },
        ].map((blog, i) => (
          <a
            key={i}
            href={blog.link}
            target="_blank"
            className="block p-5 border rounded-xl bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition"
          >
            {blog.title}
          </a>
        ))}

      </div>
    </main>
  );
}