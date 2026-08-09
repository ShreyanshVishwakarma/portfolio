"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";
import ElectricBorder from "@/components/ElectricBorder";
import FuzzyText from "@/components/FuzzyText";
import TextPressure from "@/components/TextPressure";
import Magnet from "@/components/Magnet";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  GraduationCap,
  Terminal,
  Layers,
  Twitter,
  BookOpen,
  Database,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const workProjects = [
  {
    title: "LandTrust",
    description:
      "Blockchain-based land registry on Ethereum — secure property transactions, decentralized ownership verification, and immutable land records. Represented IIIT Surat through 3 national rounds across 21 IIITs.",
    stack: ["Solidity", "Ethereum", "Next.js", "Blockchain"],
    repo: "https://github.com/ShreyanshVishwakarma/LandTrust",
    gradient: "from-emerald-500/10 to-cyan-500/10",
    featured: false,
    badge: "🏆 Grand Finalist @ UDBHAV",
  },
  {
    title: "CTF Platform",
    description:
      "Jeopardy-style cybersecurity competition platform with real-time leaderboard, flag validation, and complete challenge infrastructure. Powered a national event with 150+ participants across India and 100k+ impressions on Unstop.",
    stack: ["Next.js", "Convex", "React", "TypeScript"],
    repo: "https://github.com/ShreyanshVishwakarma/ctf",
    link: "https://ctf-seven-kappa.vercel.app/",
    gradient: "from-violet-500/10 to-purple-500/10",
    featured: true,
  },
  {
    title: "SQLBuddy",
    description:
      "The SQL interview prep tool I built after hating every one on the internet — I use it daily, and so do my friends. Every query runs against SQLite compiled to WebAssembly, right in the browser. 1.5k+ edge requests within hours of launch from a single Reddit post.",
    stack: ["Next.js", "TypeScript", "SQLite WASM", "Monaco", "WebAssembly"],
    link: "https://sqlbuddy-eta.vercel.app/",
    repo: "https://github.com/ShreyanshVishwakarma/sqlbuddy",
    gradient: "from-rose-500/10 to-orange-500/10",
    featured: false,
  },
  {
    title: "JustChatting",
    description:
      "My flagship project — a real-time chat app built purely because I wanted to build it. Full end-to-end encryption using the native Web Crypto API, with a friends system, notifications, and offline support.",
    stack: ["Next.js 15", "TypeScript", "Socket.io", "Convex", "Web Crypto API"],
    link: "https://justchatting-eight.vercel.app",
    repo: "https://github.com/ShreyanshVishwakarma/justchatting",
    gradient: "from-blue-500/10 to-indigo-500/10",
    featured: false,
  },
  {
    title: "ScriptSorcery Reimagine",
    description:
      "Award-winning CHANEL concept site with GSAP-powered storytelling, advanced scroll animations, and mobile-first responsive design.",
    stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Bootstrap"],
    link: "https://script-sorcery-reimagine-round1.vercel.app",
    repo: "https://github.com/ShreyanshVishwakarma/ScriptSorceryReimagineRound1",
    gradient: "from-amber-500/10 to-rose-500/10",
    featured: false,
    badge: "🥇 Competition Winner",
  },
  {
    title: "Book Store API",
    description:
      "RESTful backend service with JWT auth, bcrypt password hashing, MongoDB persistence, and scalable Express.js architecture.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    repo: "https://github.com/ShreyanshVishwakarma/Book-store-API",
    gradient: "from-teal-500/10 to-emerald-500/10",
    featured: false,
  },
];

const labProjects = [
  {
    title: "RustyML",
    description:
      "Machine learning models from scratch in Rust — linear regression, logistic regression, and neural networks without any external ML libraries. Focused on memory-safe, high-performance implementations.",
    stack: ["Rust", "Linear Algebra", "Machine Learning"],
    repo: "https://github.com/ShreyanshVishwakarma/RustyML",
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "RustyTodo",
    description:
      "Cross-platform CLI task manager built in Rust with Serde JSON serialization for data persistence. Fast, memory-safe, and efficient.",
    stack: ["Rust", "Serde", "CLI"],
    repo: "https://github.com/ShreyanshVishwakarma/rustytodo",
    gradient: "from-slate-500/10 to-zinc-500/10",
  },
];

const techCategories = [
  {
    name: "Languages",
    techs: ["TypeScript", "JavaScript", "Rust", "Solidity", "C"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    name: "Frontend",
    techs: ["Next.js 15", "React 19", "Tailwind CSS", "GSAP", "Bootstrap"],
    color:
      "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express.js", "Convex", "Socket.io"],
    color:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    name: "Blockchain",
    techs: ["Ethereum", "Smart Contracts", "Web3"],
    color:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    name: "Database",
    techs: ["MongoDB", "Redis", "Convex DB"],
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  },
  {
    name: "Tools",
    techs: ["Git", "GitHub", "Vercel", "AWS"],
    color:
      "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  },
];

const timelineEvents = [
  {
    year: "2026",
    title: "SQLBuddy Launch",
    description:
      "Launched the SQL interview prep platform I built after hating every one on the internet — SQLite compiled to WebAssembly, every query running right in the browser. 1.5k+ edge requests within hours from a single Reddit post",
    color: "#f43f5e",
    current: true,
  },
  {
    year: "2025",
    title: "GDG Blockchain Lead",
    description:
      "Led blockchain initiatives and organized national-level technical events at Google Developer Group, IIIT Surat",
    color: "#3b82f6",
  },
  {
    year: "2026",
    title: "National CTF Event Organizer",
    description:
      "Built complete Jeopardy-style CTF platform and organized a national cybersecurity competition with 150+ participants across India and 100k+ impressions on Unstop",
    color: "#8b5cf6",
  },
  {
    year: "2026",
    title: "UDBHAV Grand Finalist",
    description:
      "Led team through 3 rounds — intra-college → inter-IIIT → national finals across 21 IIITs with LandTrust blockchain project",
    color: "#f59e0b",
  },
  {
    year: "2024",
    title: "ScriptSorcery Winner",
    description:
      "Won frontend development competition with CHANEL concept featuring advanced GSAP animations and mobile-first design",
    color: "#f59e0b",
  },
  {
    year: "2023",
    title: "Freelance Developer",
    description:
      "Started building real-time web applications with Next.js, TypeScript, and scalable backend systems for clients",
    color: "#10b981",
  },
  {
    year: "2023",
    title: "2nd in Competitive Programming",
    description:
      "Secured 2nd rank in college-organized CP competition, began mentoring juniors in algorithmic thinking",
    color: "#f59e0b",
  },
  {
    year: "2023",
    title: "Started B.Tech at IIIT Surat",
    description:
      "Began Computer Science and Engineering, diving into full-stack development and systems programming",
    color: "#06b6d4",
  },
];

const stats = [
  { value: "7+", label: "Projects" },
  { value: "3+", label: "Years" },
  { value: "5", label: "Awards" },
  { value: "8.4", label: "CGPA" },
];

const quickLinks = [
  {
    label: "SQLBuddy",
    description: "SQL interview prep",
    href: "https://sqlbuddy-eta.vercel.app/",
    icon: Database,
  },
  {
    label: "JustChatting",
    description: "Real-time E2E chat app",
    href: "https://justchatting-eight.vercel.app",
    icon: MessageSquare,
  },
  {
    label: "CTF Platform",
    description: "National CTF event",
    href: "https://ctf-seven-kappa.vercel.app/",
    icon: ShieldCheck,
  },
  {
    label: "Blog",
    description: "Notes & writeups",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "GitHub",
    description: "All my open-source work",
    href: "https://github.com/ShreyanshVishwakarma",
    icon: Github,
  },
  {
    label: "LinkedIn",
    description: "in/shreyansh-vishwakarma",
    href: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/",
    icon: Linkedin,
  },
];

const contactLinks = [
  { label: "Gmail", href: "/contact", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/",
    icon: Linkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/shreyansh_0x0_", icon: Twitter },
  {
    label: "GitHub",
    href: "https://github.com/ShreyanshVishwakarma",
    icon: Github,
  },
];

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function Home() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const featuredWorkProject =
    workProjects.find((project) => project.featured) ?? workProjects[0];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <main>
          {/* ──────────────────── Hero ──────────────────── */}
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-8"
          >
            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
              {/* Name */}
              <div className="w-full text-left overflow-visible">
                <div className="mb-4 text-muted-foreground pl-6 font-light text-4xl sm:text-5xl md:text-6xl">
                  <FuzzyText
                    color="currentColor"
                    className="text-slate-700 dark:text-slate-200"
                    baseIntensity={0.2}
                  >
                    Hi, I&apos;m
                  </FuzzyText>
                </div>
                <div className="w-full relative">
                  <TextPressure
                    text="Shreyansh"
                    stroke={true}
                    flex={true}
                    italic={true}
                    width={true}
                    textColor="currentColor"
                    className="text-slate-900 dark:text-white"
                    strokeColor="#3ceaea"
                  />
                </div>
                <TextPressure
                  text="Vishwakarma"
                  stroke={true}
                  flex={true}
                  italic={true}
                  width={true}
                  textColor="currentColor"
                  className="text-slate-900 dark:text-white"
                  strokeColor="#3ceaea"
                />
              </div>

              {/* Subtitle */}
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl mx-auto text-center leading-relaxed">
                Full-stack developer building with{" "}
                <span className="text-foreground font-medium">TypeScript</span>,{" "}
                <span className="text-foreground font-medium">Rust</span>, and{" "}
                <span className="text-foreground font-medium">Blockchain</span>.
                I ship production-ready systems that are fast, secure, and
                delightful to use.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <ElectricBorder
                  className=""
                  color="#7df9ff"
                  speed={isButtonHovered ? 3 : 1}
                  chaos={isButtonHovered ? 0.1 : 0.06}
                  style={{ borderRadius: 16 }}
                >
                  <Button
                    asChild
                    size="lg"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    variant="ghost"
                    className="gap-2"
                  >
                    <a href="/contact">
                      Contact <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </ElectricBorder>

                <Magnet padding={50} disabled={false} magnetStrength={1}>
                  <Button asChild variant="outline" size="lg">
                    <a href="/resume">Download résumé</a>
                  </Button>
                </Magnet>
              </div>

              <ShinyText
                text="Actively seeking internship & full-time opportunities"
                className="mt-6 block text-center text-sm text-muted-foreground"
                color="#94a3b8"
                shineColor="#ffffff"
                speed={2.5}
              />
            </div>
          </section>

          {/* ──────────────────── Bento Overview Grid ──────────────────── */}
          <section
            id="about"
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* ── Quick Links ── */}
                <div className="md:col-span-2 lg:row-span-2 glass rounded-2xl p-6 md:p-8">
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-5">
                      <h3 className="text-lg md:text-2xl font-bold tracking-tight">
                        Quick Links
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                      {quickLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group flex items-center justify-between p-4 rounded-xl border bg-background/40 hover:bg-background/80 hover:border-blue-500/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="h-10 w-10 shrink-0 text-muted-foreground group-hover:text-blue-500 rounded-full bg-foreground/5 shadow-sm flex items-center justify-center transition-colors">
                              <link.icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors truncate">
                                {link.label}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {link.description}
                              </p>
                            </div>
                          </div>
                          <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground/50 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Current Status ── */}
                <div className="glass rounded-2xl p-6 group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Active
                      </span>
                    </div>
                    <Layers className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />
                    <h3 className="text-lg font-bold">Building in Public</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      SQLBuddy — SQL interview prep
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Launched 2026
                    </p>
                  </div>
                </div>

                {/* ── Education ── */}
                <div className="glass rounded-2xl p-6 group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <GraduationCap className="h-8 w-8 text-cyan-500 dark:text-cyan-400 mb-3" />
                    <h3 className="text-lg font-bold">IIIT Surat</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      B.Tech CSE • 2022-2026
                    </p>
                    <p className="text-3xl font-bold mt-4 gradient-text">
                      8.4
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">CGPA</p>
                  </div>
                </div>

                {/* ── Stats ── */}
                <div className="md:col-span-2 glass rounded-2xl p-6">
                  <div className="relative z-10 grid grid-cols-4 gap-4 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl md:text-3xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── About ── */}
                <div className="md:col-span-2 glass rounded-2xl p-6">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3">About</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      I&apos;m a Computer Science student obsessed with building
                      high-performance systems and full-stack applications.
                      Strong core CS fundamentals, a deep passion for clean
                      code, and a drive to ship features fast — from real-time
                      chat platforms to blockchain land registries.
                    </p>
                  </div>
                </div>

                {/* ── Tech Stack ── */}
                <div className="md:col-span-2 glass rounded-2xl p-6">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {techCategories.flatMap((cat) =>
                        cat.techs.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${cat.color}`}
                          >
                            {tech}
                          </span>
                        )),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </section>

          {/* ──────────────────── The Work ──────────────────── */}
          <section
            id="work"
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="mb-12">
                <Badge variant="outline" className="mb-3">
                  Production
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  The Work
                </h2>
                <p className="text-muted-foreground mt-2">
                  Polished products shipped to production
                </p>
              </div>
            </AnimatedContent>

            {/* Featured Work Project */}
            <AnimatedContent
              distance={40}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <BorderGlow
                className="block glass rounded-2xl p-6 md:p-8 mb-6 group transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                glowRadius={34}
                borderRadius={20}
                edgeSensitivity={32}
                fillOpacity={0.3}
              >
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {featuredWorkProject.badge && (
                      <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                        {featuredWorkProject.badge}
                      </Badge>
                    )}
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    {featuredWorkProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    {featuredWorkProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featuredWorkProject.stack.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-foreground/5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {featuredWorkProject.link && (
                      <a
                        href={featuredWorkProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                      >
                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={featuredWorkProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 group-hover:underline"
                    >
                      <Github className="h-4 w-4" /> Source Code{" "}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </BorderGlow>
            </AnimatedContent>

            {/* Other Work Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workProjects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <AnimatedContent
                    key={project.title}
                    distance={40}
                    direction="vertical"
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.1}
                    delay={i * 0.1}
                  >
                    <div
                      className={`glass rounded-2xl p-6 group h-full transition-all duration-300 hover:shadow-lg`}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        {project.badge && (
                          <Badge
                            variant="secondary"
                            className="w-fit mb-3 bg-foreground/5"
                          >
                            {project.badge}
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold tracking-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.stack.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs font-medium rounded-md bg-foreground/5 text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                            >
                              Live Demo <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="h-3.5 w-3.5" /> Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
            </div>
          </section>

          {/* ──────────────────── The Lab ──────────────────── */}
          <section
            id="lab"
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="mb-12">
                <Badge variant="outline" className="mb-3">
                  R&D
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  The Lab
                </h2>
                <p className="text-muted-foreground mt-2">
                  Experimental engineering and systems programming
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {labProjects.map((project, i) => (
                <AnimatedContent
                  key={project.title}
                  distance={40}
                  direction="vertical"
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.1}
                  delay={i * 0.1}
                >
                  <div
                    className={`glass rounded-2xl p-6 group h-full transition-all duration-300 hover:shadow-lg`}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <Terminal className="h-6 w-6 text-orange-500 dark:text-orange-400 mb-3" />
                      <h3 className="text-xl font-bold tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs font-medium rounded-md bg-foreground/5 text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" /> Source Code{" "}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </section>

          {/* ──────────────────── Timeline ──────────────────── */}
          <section
            id="timeline"
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6 relative"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="mb-16 text-center">
                <Badge variant="outline" className="mb-3">
                  Journey
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  The Timeline
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  From first code to blockchain leadership — a progression story
                </p>
              </div>
            </AnimatedContent>

            <div className="relative max-w-3xl mx-auto">
              <div className="space-y-8 sm:space-y-12 z-10 relative">
                {timelineEvents.map((event, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <AnimatedContent
                      key={i}
                      distance={40}
                      direction="vertical"
                      reverse={false}
                      initialOpacity={0}
                      animateOpacity
                      threshold={0.1}
                      delay={i * 0.1}
                    >
                      <div className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0">
                        {/* Connecting Curvy Line to next item */}
                        {i < timelineEvents.length - 1 && (
                          <div className="absolute left-[28px] sm:left-1/2 top-8 w-[60px] -translate-x-1/2 z-0 h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] text-blue-500/30">
                            {/* Mobile: straight line */}
                            <svg
                              fill="none"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="w-full h-full sm:hidden"
                            >
                              <path
                                d="M 50 0 L 50 100"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeDasharray="6 6"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                            {/* Desktop: alternating curve */}
                            <svg
                              fill="none"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="hidden sm:block w-full h-full"
                            >
                              <path
                                d={
                                  isEven
                                    ? "M 50 0 C 50 20, 90 20, 90 50 C 90 80, 50 80, 50 100"
                                    : "M 50 0 C 50 20, 10 20, 10 50 C 10 80, 50 80, 50 100"
                                }
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeDasharray="6 6"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Dot */}
                        <div className="absolute left-[28px] sm:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                          <div
                            className="w-4 h-4 rounded-full border-[3px] bg-background shadow-sm shadow-blue-500/20"
                            style={{ borderColor: event.color }}
                          >
                            {event.current && (
                              <div
                                className="absolute inset-0 m-0.5 rounded-full"
                                style={{ background: event.color }}
                              />
                            )}
                          </div>
                        </div>

                        {/* Content Card */}
                        <div
                          className={`w-full sm:w-[calc(50%-2rem)] pl-14 sm:pl-0 ${
                            isEven
                              ? "sm:pr-10 sm:text-left sm:ml-0"
                              : "sm:pl-10 sm:ml-auto"
                          }`}
                        >
                          <div
                            className={`glass rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col items-start`}
                          >
                            <div className="flex items-center gap-3 mb-2 flex-row">
                              <span
                                className="text-xs font-bold text-foreground bg-foreground/5 px-2.5 py-1 rounded-md backdrop-blur-md border border-foreground/10"
                                style={{ color: event.color }}
                              >
                                {event.year}
                              </span>
                              {event.current && (
                                <Badge
                                  variant="outline"
                                  className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] uppercase tracking-wider"
                                >
                                  Current
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-bold tracking-tight mb-1">
                              {event.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedContent>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ──────────────────── Contact ──────────────────── */}
          <section
            id="contact"
            className="relative scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
          >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-background to-background" />

            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <Badge
                      variant="outline"
                      className="mb-6 backdrop-blur-sm bg-background/50 border-blue-500/20 text-blue-500"
                    >
                      Let&apos;s Collaborate
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                      Ready to build something{" "}
                      <br className="hidden lg:block" />
                      <span className="gradient-text italic pr-2">
                        ambitious
                      </span>
                      ?
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Whether it&apos;s real-time platforms, blockchain systems,
                      or performant frontends — let&apos;s turn your vision into
                      production-ready software.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
                    {contactLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center justify-between p-4 rounded-xl border bg-background/40 hover:bg-background/80 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 text-muted-foreground group-hover:text-blue-500 rounded-full bg-foreground/5 shadow-sm flex items-center justify-center transition-colors">
                            <link.icon className="h-5 w-5" />
                          </div>
                          <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </section>
        </main>

        {/* ──────────────────── Footer ──────────────────── */}
        <footer className="relative border-t border-foreground/10 bg-background/50 backdrop-blur-lg overflow-hidden py-12 mt-12">
          {/* Subtle gradient glow at the bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-linear-to-t from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-bold tracking-tight mb-1">
                  Shreyansh Vishwakarma
                </span>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  Building with intent{" "}
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>{" "}
                  {new Date().getFullYear()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/blog">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Button>
                </Link>
                {contactLinks.map((link) => (
                  <Tooltip key={link.label}>
                    <TooltipTrigger asChild>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group p-2.5 rounded-full hover:bg-foreground/5 transition-all duration-300 transform hover:scale-110"
                      >
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="text-xs bg-background/90 backdrop-blur border text-foreground"
                    >
                      {link.label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
