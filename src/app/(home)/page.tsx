import Link from "next/link";
import Image from "next/image";
import Devcoder from './assets/Devcoder.png';
export default function HomePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="mb-6 flex justify-center">
            <div className="block dark:hidden">
              <Image
                src={Devcoder}
                alt="Devcoder.io"
                width={240}
                height={120}
                className="mx-auto h-auto w-auto rounded-full"
              />
            </div>

            <div className="hidden dark:block">
              <Image
                src={Devcoder}
                alt="Devcoder.io (dark)"
                width={240}
                height={120}
                className="mx-auto h-auto w-auto filter invert rounded-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Devcoder Knowledge Base
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Master multiple technologies and concepts needed to ace your
            technical interviews
          </p>

          <p className="mt-4 text-base text-muted-foreground">
            📚 Java • JavaScript • React • DSA • System Design • Design Patterns
          </p>

          <div className="mt-8 flex justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="/docs/intro"
              className="
      rounded-lg px-6 py-3 text-sm font-medium
      bg-gray-200 text-gray-900
      shadow-sm
      transition-all duration-200
      hover:bg-gray-300
      dark:bg-gray-800 dark:text-gray-100
      dark:hover:bg-gray-700
    "
            >
              📖 Start Learning
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/docs/intro"
              className="
      rounded-lg px-6 py-3 text-sm font-medium
      border border-gray-300 text-gray-700
      transition-all duration-200
      hover:bg-gray-100
      dark:border-gray-700 dark:text-gray-300
      dark:hover:bg-gray-800
    "
            >
              📂 Browse Docs
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            🎯 Interview-focused • 💡 Real-world examples • ⚡ Quick references
          </p>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Why Devcoder Knowledge Base?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Curated content designed specifically for interview preparation
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="
  rounded-xl p-6
  bg-gray-50
  border border-gray-300
  shadow-sm
  transition-all duration-200
  hover:shadow-md hover:-translate-y-0.5
  dark:bg-gray-900
  dark:border-gray-700
"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECH GRID ================= */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold">
            Explore Technologies
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((t) => (
              <div
                key={t.title}
                className="
  rounded-xl p-6
  bg-gray-50
  border border-gray-300
  shadow-sm
  transition-all duration-200
  hover:shadow-md hover:-translate-y-0.5
  dark:bg-gray-900
  dark:border-gray-700
"
              >
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "🔧 Multi-Technology Coverage",
    description:
      "Java, JavaScript, TypeScript, React, DSA, System Design — all in one place.",
  },
  {
    title: "💻 Practical Code Examples",
    description: "Hands-on implementations from beginner to advanced levels.",
  },
  {
    title: "🎯 Interview-Focused",
    description:
      "Every topic is curated to help you crack real technical interviews.",
  },
  {
    title: "🔄 Continuously Updated",
    description: "Stay aligned with modern frameworks and best practices.",
  },
  {
    title: "🤝 Community Driven",
    description: "Learn, contribute, and grow together.",
  },
  {
    title: "📱 Always Accessible",
    description: "Clean reading experience on all devices.",
  },
];

const tech = [
  { title: "☕ Java", desc: "Collections, Multithreading, Design Patterns" },
  { title: "⚛️ React", desc: "Hooks, State, Performance" },
  { title: "📜 JavaScript & TypeScript", desc: "ES6+, Async, Type Safety" },
  { title: "📊 DSA", desc: "Algorithms, Complexity, Patterns" },
  { title: "🏗️ System Design", desc: "Scalability, Databases, Architecture" },
  { title: "🎯 Interview Prep", desc: "Strategies, Tips, Best Practices" },
];
