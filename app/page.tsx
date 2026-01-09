import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code2,
  Database,
  Globe,
  Rocket,
  Terminal,
  Zap,
  Mail,
  Linkedin,
  Send,
  Github,
  ArrowUpRight,
  Sparkles,
  Target,
  Heart,
} from "lucide-react";

import TextPressure from "@/components/TextPressure";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { label: "Projects Shipped", value: "4+", icon: Rocket },
  { label: "Real-time Features", value: "3", icon: Zap },
  { label: "Hackathon Wins", value: "1", icon: Sparkles },
];

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Rust", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    skills: [
      { name: "Next.js 15", level: 90 },
      { name: "React 19", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "GSAP", level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Socket.io", level: 82 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 70 },
      { name: "Convex DB", level: 75 },
    ],
  },
];

const journeyItems = [
  {
    title: "Currently exploring",
    icon: Target,
    color: "from-violet-500 to-purple-500",
    items: [
      "Advanced TypeScript patterns",
      "Microservices architecture",
      "WebAssembly integrations",
      "Cloud deployment strategies",
    ],
  },
  {
    title: "Next goals",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    items: [
      "Contribute to open-source Rust projects",
      "Master system design patterns",
      "Build production-scale applications",
      "Learn container orchestration",
    ],
  },
  {
    title: "Interests",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
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
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    featured: true,
  },
  {
    title: "ScriptSorcery Reimagine",
    description:
      "Award-winning CHANEL concept site featuring GSAP-powered storytelling, Bootstrap layouting, and mobile-first polish.",
    stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Bootstrap"],
    link: "https://script-sorcery-reimagine-round1.vercel.app",
    repo: "https://github.com/ShreyanshVishwakarma/ScriptSorceryReimagineRound1",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    featured: true,
  },
  {
    title: "Book Store API",
    description:
      "RESTful backend with JWT auth, MongoDB persistence, and production-ready Express architecture for bookstore operations.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    link: "https://github.com/ShreyanshVishwakarma/Book-store-API",
    repo: "https://github.com/ShreyanshVishwakarma/Book-store-API",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    featured: false,
  },
  {
    title: "RustyTodo",
    description:
      "Cross-platform CLI task manager built with Rust and Serde for fast, memory-safe productivity on the terminal.",
    stack: ["Rust", "Serde", "CLI"],
    link: "https://github.com/ShreyanshVishwakarma/rustytodo",
    repo: "https://github.com/ShreyanshVishwakarma/rustytodo",
    gradient: "from-slate-600 via-zinc-600 to-neutral-600",
    featured: false,
  },
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

export default function Home() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                S
              </div>
              <span className="hidden text-sm font-semibold tracking-tight sm:inline">
                shreyansh.dev
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Button key={item.href} variant="ghost" size="sm" asChild>
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <a href="mailto:shreyanshvish004@gmail.com" className="gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Let&apos;s talk</span>
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero Section */}
          <section
            id="home"
            className="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center"
          >
            <Badge variant="secondary" className="mb-6 gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </Badge>

            <div className=" w-full text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-left overflow-visible">
              <div className="mb-4 text-muted-foreground pl-6 font-light">
                <FuzzyText baseIntensity={0.2}>Hi , I'm</FuzzyText>
              </div>

              <div className="w-full relative">
                <TextPressure
                  text="Shreyansh"
                  stroke={true}
                  flex={true}
                  italic={true}
                  width={true}
                  strokeColor="#3ceaea"
                />
              </div>
              <TextPressure
                text="Vishwakarma"
                stroke={true}
                flex={true}
                italic={true}
                width={true}
                strokeColor="#3ceaea"
              />
            </div>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Full-stack developer specializing in TypeScript, Rust, and modern
              web technologies. I build production-ready applications that are
              fast, secure, and delightful to use.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:shreyanshvish004@gmail.com">
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf">Download résumé</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-3 rounded-lg bg-muted p-3">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-bold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-20 py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge variant="outline">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  A systems-minded builder who ships
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I blend product thinking with full-stack execution—pairing
                  Rust, TypeScript, and thoughtful UX to craft reliable,
                  human-centered software.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m Shreyansh Vishwakarma, a full-stack developer who
                    thrives on turning real-time ideas into production-ready
                    products. I love designing architectures that stay resilient
                    under load.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Globe,
                    title: "Remote-first",
                    desc: "Based in India, happy to sync across time zones",
                  },
                  {
                    icon: Sparkles,
                    title: "Hackathon Winner",
                    desc: "Frontend storyteller with a love for motion design",
                  },
                  {
                    icon: Code2,
                    title: "Open Source",
                    desc: "Actively contributing to tooling and real-time ecosystems",
                  },
                  {
                    icon: Zap,
                    title: "Performance",
                    desc: "Optimizing with TypeScript, Rust, and WebAssembly",
                  },
                ].map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <div className="mb-3 inline-flex rounded-lg bg-muted p-2.5">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-20 py-24">
            <div className="text-center">
              <Badge variant="outline">Skills</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                My Technical Toolkit
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                TypeScript, Rust, and a modern web stack for building fast,
                secure experiences.
              </p>
            </div>

            <Tabs defaultValue="languages" className="mt-12">
              <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-4">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-8"
                >
                  <div className="mx-auto max-w-2xl space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-20 py-24">
            <div className="text-center">
              <Badge variant="outline">Projects</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Each project built with intention, instrumentation, and a bias
                toward maintainability.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => {
                const showSecondaryCta =
                  project.repo && project.repo !== project.link;
                return (
                  <Card key={project.title} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          {project.featured && (
                            <Badge className="mb-2">
                              <Sparkles className="mr-1 h-3 w-3" /> Featured
                            </Badge>
                          )}
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="gap-3">
                      <Button asChild size="sm" className="gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {showSecondaryCta ? "Live demo" : "View project"}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                      {showSecondaryCta && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Journey Section */}
          <section id="journey" className="scroll-mt-20 py-24">
            <div className="text-center">
              <Badge variant="outline">Journey</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Growth Mindset
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                A snapshot of what I&apos;m building, exploring, and aiming for
                next.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {journeyItems.map((column) => (
                <Card key={column.title}>
                  <CardHeader>
                    <div className="mb-2 inline-flex w-fit rounded-lg bg-muted p-3">
                      <column.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{column.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20 py-24">
            <Card>
              <CardContent className="p-8 sm:p-12">
                <div className="mx-auto max-w-3xl text-center">
                  <Badge className="mb-6">Let&apos;s Collaborate</Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to build something ambitious?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Share what you&apos;re imagining—real-time platforms,
                    performant frontends, or developer tooling—and I&apos;ll
                    help bring it to life.
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {contactLinks.map((link) => (
                      <Tooltip key={link.label}>
                        <TooltipTrigger asChild>
                          <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2"
                          >
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
                            >
                              <link.icon className="h-5 w-5" />
                              {link.label}
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Contact via {link.label}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  <p className="mt-8 text-sm text-muted-foreground">
                    Usually respond within 2 business days
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                S
              </div>
              <div>
                <p className="text-sm font-medium">Shreyansh Vishwakarma</p>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden h-8 sm:block" />

            <div className="flex gap-2">
              {contactLinks.map((link) => (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <Button asChild variant="ghost" size="icon">
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
                      >
                        <link.icon className="h-4 w-4" />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    </Button>
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
