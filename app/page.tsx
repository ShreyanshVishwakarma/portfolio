import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Full-stack projects delivered", value: "4+" },
  { label: "Real-time features shipped", value: "3" },
  { label: "Hackathon awards", value: "1" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Rust", "C"],
  },
  {
    title: "Frontend",
    items: ["Next.js 15", "React 19", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "jQuery", "GSAP"],
  },
  {
    title: "Backend & Realtime",
    items: ["Node.js", "Express.js", "Socket.io", "JWT Auth"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Redis", "Convex DB"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

const journeyColumns = [
  {
    title: "Currently exploring",
    items: [
      "Advanced TypeScript patterns",
      "Microservices architecture",
      "WebAssembly integrations",
      "Cloud deployment strategies",
    ],
  },
  {
    title: "Next goals",
    items: [
      "Contribute to open-source Rust projects",
      "Master system design patterns",
      "Build production-scale applications",
      "Learn container orchestration",
    ],
  },
  {
    title: "Interests",
    items: [
      "Performance optimization",
      "Real-time systems",
      "Distributed computing",
      "Developer tooling",
    ],
  },
];

const projects = [
  {
    title: "JustChatting",
    description:
      "End-to-end encrypted, local-first chat app with real-time friend system, notifications, and offline support.",
    stack: ["Next.js", "TypeScript", "Socket.io", "Convex", "Clerk"],
    link: "https://justchatting-eight.vercel.app",
    repo: "https://github.com/ShreyanshVishwakarma/justchatting",
  },
  {
    title: "ScriptSorcery Reimagine",
    description:
      "Award-winning CHANEL concept site featuring GSAP-powered storytelling, Bootstrap layouting, and mobile-first polish.",
    stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Bootstrap"],
    link: "https://script-sorcery-reimagine-round1.vercel.app",
    repo: "https://github.com/ShreyanshVishwakarma/ScriptSorceryReimagineRound1",
  },
  {
    title: "Book Store API",
    description:
      "RESTful backend with JWT auth, MongoDB persistence, and production-ready Express architecture for bookstore operations.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    link: "https://github.com/ShreyanshVishwakarma/Book-store-API",
    repo: "https://github.com/ShreyanshVishwakarma/Book-store-API",
  },
  {
    title: "RustyTodo",
    description:
      "Cross-platform CLI task manager built with Rust and Serde for fast, memory-safe productivity on the terminal.",
    stack: ["Rust", "Serde", "CLI"],
    link: "https://github.com/ShreyanshVishwakarma/rustytodo",
    repo: "https://github.com/ShreyanshVishwakarma/rustytodo",
  },
];

const contactLinks = [
  { label: "Email", href: "mailto:shreyanshvish004@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/",
  },
  { label: "Telegram", href: "https://t.me/shreyanshvishwakarma" },
  { label: "GitHub", href: "https://github.com/ShreyanshVishwakarma" },
];

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-xl space-y-2">
      <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_50%)]">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-900 dark:bg-black/50">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-700 dark:text-zinc-200">
            shreyansh.dev
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:shreyanshvish004@gmail.com"
            className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main id="home" className="mx-auto flex max-w-5xl flex-col gap-24 px-6 pb-24 pt-20 sm:gap-32 sm:pt-32">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-4 py-1 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
              Available for new projects
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Full-stack developer building real-time, resilient experiences.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                I design and ship TypeScript- and Rust-powered products that feel fast, secure, and intuitive. From
                local-first chat platforms to award-winning frontends, I love turning ambitious ideas into dependable software.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:shreyanshvish004@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Start a project
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
              >
                Download résumé
              </a>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-3xl border border-zinc-100 bg-white/60 p-6 text-sm shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <p className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white/70 p-10 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">What I&apos;m focused on</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Real-time collaboration:</span> crafting Socket.io-powered experiences that stay responsive, even offline.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Systems & Rust:</span> exploring WebAssembly and memory-safe tooling for blazing fast workflows.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Developer enablement:</span> building DX guardrails with TypeScript, testing, and automation that scale.
              </li>
            </ul>
          </div>
        </section>

        <section id="about" className="scroll-mt-24">
          <SectionHeading
            eyebrow="About"
            title="A systems-minded builder who ships"
            description="I blend product thinking with full-stack execution—pairing Rust, TypeScript, and thoughtful UX to craft reliable, human-centered software."
          />
          <div className="mt-8 grid gap-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:grid-cols-2">
            <p>
              I&apos;m Shreyansh Vishwakarma, a full-stack developer who thrives on turning real-time ideas into production-ready products. I love designing architectures that stay resilient under load, whether that&apos;s an encrypted chat platform, a story-driven frontend, or a developer tool.
            </p>
            <div className="space-y-3">
              <p>
                When I&apos;m not shipping features, I&apos;m exploring advanced TypeScript patterns, diving into Rust ecosystems, or experimenting with WebAssembly to squeeze out more performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
                  Remote-first collaborator based in India—happy to sync across time zones
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-400" aria-hidden />
                  Hackathon-winning frontend storyteller with a love for motion design
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-purple-400" aria-hidden />
                  Actively building and contributing to open-source tooling and real-time ecosystems
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills that move ideas forward"
            description="TypeScript, Rust, and a modern web stack for building fast, secure experiences."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-zinc-100 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="space-y-4">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Learning Journey"
            title="Growing through experimentation and community"
            description="A snapshot of what I&apos;m building, exploring, and aiming for next."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {journeyColumns.map((column) => (
              <article
                key={column.title}
                className="rounded-3xl border border-zinc-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that blend craft and impact"
            description="Each built with intention, instrumentation, and a bias toward maintainability."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const showSecondaryCta = project.repo && project.repo !== project.link;
              return (
                <article
                  key={project.title}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-100 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-400 hover:text-blue-500 dark:border-blue-900/60 dark:text-blue-400 dark:hover:border-blue-700 dark:hover:text-blue-300"
                    >
                      {showSecondaryCta ? "Live demo" : "View project"}
                      <span aria-hidden>↗</span>
                    </a>
                    {showSecondaryCta ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-200 dark:hover:text-zinc-100"
                      >
                        View code
                        <span aria-hidden>↗</span>
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Collaborate"
            title="Let&apos;s build something ambitious"
            description="Share what you&apos;re imagining—real-time platforms, performant frontends, or developer tooling—and I&apos;ll help bring it to life."
          />
          <div className="mt-10 rounded-3xl border border-zinc-100 bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 p-px shadow-lg dark:border-zinc-800">
            <div className="rounded-[calc(1.5rem-1px)] bg-white p-10 dark:bg-zinc-950">
              <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
                <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    I love partnering with teams to ship bold ideas—whether it&apos;s a local-first chat app, a polished marketing experience, or a backend service that scales with confidence.
                  </p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    Send over a quick brief and I&apos;ll reply within two business days.
                  </p>
                </div>
                <div className="space-y-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between rounded-2xl border border-zinc-200 px-4 py-3 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:hover:border-zinc-200 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                    >
                      {link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-white/80 py-10 text-sm text-zinc-500 backdrop-blur dark:border-zinc-900 dark:bg-black/50 dark:text-zinc-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Shreyansh Vishwakarma. Built with care in Next.js.</p>
          <div className="flex gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition hover:text-zinc-800 dark:hover:text-zinc-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
