"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";
import ElectricBorder from "@/components/ElectricBorder";
import FuzzyText from "@/components/FuzzyText";
import TextPressure from "@/components/TextPressure";
import Magnet from "@/components/Magnet";
import BorderGlow from "@/components/BorderGlow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Send,
  Github,
  ExternalLink,
  GraduationCap,
  Terminal,
  Layers,
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
      "Jeopardy-style cybersecurity competition platform with real-time leaderboard, flag validation, and complete challenge infrastructure for a national-level event.",
    stack: ["Next.js", "Convex", "React", "TypeScript"],
    repo: "https://github.com/ShreyanshVishwakarma/ctf-platform",
    link: "https://ctf-seven-kappa.vercel.app/",
    gradient: "from-violet-500/10 to-purple-500/10",
    featured: true,
  },
  {
    title: "JustChatting",
    description:
      "End-to-end encrypted, local-first chat app with real-time friend system, notifications, and offline support built with modern auth and database.",
    stack: ["Next.js 15", "TypeScript", "Socket.io", "Convex", "Clerk"],
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
    year: "2025",
    title: "GDG Blockchain Lead",
    description:
      "Leading blockchain initiatives and organizing national-level technical events at Google Developer Group, IIIT Surat",
    color: "#3b82f6",
    current: true,
  },
  {
    year: "2025",
    title: "National CTF Event Organizer",
    description:
      "Built complete Jeopardy-style CTF platform and organized national cybersecurity competition with participants across India",
    color: "#8b5cf6",
  },
  {
    year: "2024",
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
    year: "2022",
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
  { value: "8.17", label: "CGPA" },
];

const contactLinks = [
  { label: "Email", href: "mailto:shreyanshvish004@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreyansh-vishwakarma-63a853296/",
    icon: Linkedin,
  },
  { label: "Telegram", href: "https://t.me/shreyanshvishwakarma", icon: Send },
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
        {/* ──────────────────── Theme Toggle Only ──────────────────── */}
        <div className="fixed top-5 right-5 z-50">
          <ThemeToggle />
        </div>

        <main>
          {/* ──────────────────── Hero ──────────────────── */}
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center "
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
                  chaos={isButtonHovered ? 0.2 : 0.1}
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
                    <a href="mailto:shreyanshvish004@gmail.com">
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
                {/* ── Featured Project: LandTrust ── */}
                <BorderGlow
                  className="md:col-span-2 lg:row-span-2 glass rounded-2xl p-6 md:p-8 group cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                  glowRadius={32}
                  borderRadius={20}
                  edgeSensitivity={34}
                  fillOpacity={0.35}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/8 via-transparent to-cyan-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 h-full flex flex-col">
                    <Badge className="w-fit mb-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15">
                      🏆 Grand Finalist @ UDBHAV
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                      LandTrust
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      Blockchain-based land registry on Ethereum with smart
                      contracts for secure property transactions and
                      decentralized ownership verification. Built for the
                      national stage across 21 IIITs.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {["Solidity", "Ethereum", "Next.js", "Blockchain"].map(
                        (t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-foreground/5 text-muted-foreground"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                    <a
                      href="https://github.com/ShreyanshVishwakarma/LandTrust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline w-fit"
                    >
                      View on GitHub{" "}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </BorderGlow>

                {/* ── Current Status ── */}
                <div className="glass rounded-2xl p-6 group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-emerald-400 glow-dot"
                        style={{ color: "#34d399" }}
                      />
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Active
                      </span>
                    </div>
                    <Layers className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" />
                    <h3 className="text-lg font-bold">Blockchain Lead</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Google Developer Group
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      IIIT Surat • 2025
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
                      8.17
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
                      I&apos;m a systems-minded full-stack developer who blends
                      product thinking with deep technical execution. I pair
                      Rust, TypeScript, and Solidity with thoughtful UX to craft
                      reliable, human-centered software — from real-time chat
                      platforms to blockchain land registries.
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
                        ))
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
                      <Badge key={t} variant="secondary" className="bg-foreground/5">
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
                              Live Demo{" "}
                              <ExternalLink className="h-3.5 w-3.5" />
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
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
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

            <div className="relative max-w-2xl mx-auto">
              {/* Vertical Line */}
              <div className="timeline-line" />

              <div className="space-y-6">
                {timelineEvents.map((event, i) => (
                  <AnimatedContent
                    key={i}
                    distance={30}
                    direction="horizontal"
                    reverse={false}
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.2}
                    delay={i * 0.08}
                  >
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div
                        className="absolute left-1.75 top-5 w-4.5 h-4.5 rounded-full border-2 bg-background z-10"
                        style={{ borderColor: event.color }}
                      >
                        {event.current ? (
                          <div
                            className="absolute inset-0.75 rounded-full glow-dot"
                            style={{
                              background: event.color,
                              color: event.color,
                            }}
                          />
                        ) : (
                          <div
                            className="absolute inset-1 rounded-full"
                            style={{ background: event.color }}
                          />
                        )}
                      </div>

                      {/* Card */}
                      <div className="glass rounded-xl p-5 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded">
                            {event.year}
                          </span>
                          {event.current && (
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </section>

          {/* ──────────────────── Contact ──────────────────── */}
          <section
            id="contact"
            className="scroll-mt-20 py-24 mx-auto max-w-6xl px-4 sm:px-6"
          >
            <AnimatedContent
              distance={60}
              direction="vertical"
              initialOpacity={0}
              animateOpacity
              threshold={0.1}
            >
              <BorderGlow
                className="glass rounded-2xl p-8 md:p-16 text-center"
                glowRadius={36}
                borderRadius={20}
                edgeSensitivity={30}
                fillOpacity={0.3}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-violet-500/5 rounded-2xl" />
                <div className="relative p-10 z-10">
                  <Badge variant="secondary" className="mb-6 backdrop-blur-sm">
                    Let&apos;s Collaborate
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Ready to build something{" "}
                    <span className="gradient-text">ambitious</span>?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Whether it&apos;s real-time platforms, blockchain systems, or
                    performant frontends — let&apos;s turn your vision into
                    production-ready software.
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {contactLinks.map((link) => (
                      <Tooltip key={link.label}>
                        <TooltipTrigger asChild>
                          <a
                            href={link.href}
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="glass rounded-xl px-5 py-3 flex items-center gap-2.5 text-sm font-medium hover:scale-105 transition-transform"
                          >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          Contact via {link.label}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  <p className="mt-8 text-xs text-muted-foreground">
                    Usually respond within 2 business days
                  </p>
                </div>
              </BorderGlow>
            </AnimatedContent>
          </section>
        </main>

        {/* ──────────────────── Footer ──────────────────── */}
        <footer className="border-t border-foreground/5 py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-medium">Shreyansh Vishwakarma</p>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>

            <div className="flex gap-1">
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
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{link.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
