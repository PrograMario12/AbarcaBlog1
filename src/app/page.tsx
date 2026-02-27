import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BrainCircuit, Github, Globe, TerminalSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="px-3 py-1 text-sm border bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors">
              <BrainCircuit className="mr-2 h-4 w-4" />
              Building the Future with AI
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineering <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Meets Artificial Intelligence
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
              I am a Senior Full Stack Engineer & AI Specialist. I build scalable applications, integrate advanced language models, and design intelligent systems to solve complex problems.
            </p>
            <div className="space-x-4 mt-8">
              <Link href="/projects">
                <Button size="lg" className="rounded-full shadow-lg shadow-blue-500/20">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="rounded-full bg-background/50 backdrop-blur-sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tech Arsenal</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 pt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            { name: "PyTorch", type: "AI/ML" },
            { name: "TensorFlow", type: "AI/ML" },
            { name: "LangChain", type: "Agents" },
            { name: "OpenAI API", type: "LLMs" },
            { name: "TypeScript", type: "Language" },
            { name: "Python", type: "Language" },
            { name: "Next.js", type: "Framework" },
            { name: "React", type: "Frontend" },
            { name: "Node.js", type: "Backend" },
            { name: "PostgreSQL", type: "Database" },
            { name: "Docker", type: "DevOps" },
            { name: "AWS", type: "Cloud" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center rounded-xl border bg-background/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:bg-muted hover:scale-105"
            >
              <TerminalSquare className="h-8 w-8 mb-3 text-muted-foreground" />
              <span className="font-semibold text-sm">{tech.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{tech.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Sample Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            A selection of my recent work in AI and Software Engineering.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Autonomous Agent Swarm",
              description: "A multi-agent system built to research, summarize, and write code automatically.",
              tags: ["Python", "LangChain", "OpenAI"],
              github: "#",
            },
            {
              title: "RAG Document Engine",
              description: "Retrieval-Augmented Generation system for querying massive internal knowledge bases.",
              tags: ["Next.js", "Vector DB", "FastAPI"],
              github: "#",
            },
            {
              title: "Semantic Code Search",
              description: "AI-powered tool that understands code semantics to find snippets via natural language.",
              tags: ["PyTorch", "Transformers", "React"],
              github: "#",
            },
          ].map((project, i) => (
            <Card key={i} className="flex flex-col transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 bg-background/60 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Link href={project.github} className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
                <Link href="#" className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors">
                  <Globe className="mr-2 h-4 w-4" />
                  Live
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outline" className="rounded-full">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Blog Sample Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end mb-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Writing</h2>
            <p className="text-muted-foreground md:text-lg/relaxed">Ideas, tutorials, and technical insights.</p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex items-center mt-4 sm:mt-0 text-sm font-medium text-blue-500 hover:text-blue-400">
            Read all posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto max-w-5xl space-y-6">
          {[
            {
              title: "Understanding Transformer Architectures in 2026",
              date: "Feb 27, 2026",
              excerpt: "A deep dive into how self-attention mechanisms have evolved over the last several years...",
              slug: "understanding-transformers-2026",
            },
            {
              title: "Building Production-Ready AI Agents with LangChain",
              date: "Feb 15, 2026",
              excerpt: "Architecting reliable agentic systems that can interact with APIs without hallucinating...",
              slug: "production-ready-ai-agents",
            },
          ].map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="block group">
              <div className="flex flex-col justify-between p-6 rounded-xl border bg-card/40 backdrop-blur-sm transition-all hover:bg-accent/50 group-hover:border-blue-500/30">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="font-semibold text-xl group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
          <Link href="/blog" className="inline-flex sm:hidden items-center mt-4 text-sm font-medium text-blue-500 hover:text-blue-400">
            Read all posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
