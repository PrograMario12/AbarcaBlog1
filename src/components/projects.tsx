"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, Stethoscope, Bird } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Autonomous Agent Swarm",
    description: "A multi-agent system built to research, summarize, and write code automatically.",
    tags: ["Python", "LangChain", "OpenAI"],
    github: "#",
    live: "#",
    real: true
  },
  {
    title: "RAG Document Engine",
    description: "Retrieval-Augmented Generation system for querying massive internal knowledge bases.",
    tags: ["Next.js", "Vector DB", "FastAPI"],
    github: "#",
    live: "#",
    real: true
  },
  {
    title: "Semantic Code Search",
    description: "AI-powered tool that understands code semantics to find snippets via natural language.",
    tags: ["PyTorch", "Transformers", "React"],
    github: "#",
    live: "#",
    real: true,
    dunderMifflin: true
  },
  {
    title: "Vision Analysis Pipeline",
    description: "Real-time object detection and classification pipeline for manufacturing defects.",
    tags: ["TensorFlow", "OpenCV", "Docker"],
    github: "#",
    live: "#",
    real: true
  },
  {
    title: "Águila Desarrolladora",
    description: "Proyecto Homenaje: Algoritmo predictivo de partidos del América basado en sentimiento de afición.",
    tags: ["Sentiment Analysis", "Twitter API", "América Core"],
    github: "#",
    live: "#",
    real: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="container py-20 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002D72] dark:text-[#FFD23F]">
          Proyectos Destacados
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
          Una selección de trabajos reales y experimentales.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className={`flex flex-col h-full transition-all hover:shadow-lg ${
                project.real
                ? 'hover:border-blue-500/50 hover:shadow-blue-500/10'
                : 'border-[#FFD23F] bg-[#002D72]/5 dark:bg-[#002D72]/20 hover:shadow-[#FFD23F]/20'
            }`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                   <CardTitle className="text-xl">{project.title}</CardTitle>
                   {!project.real && <Bird className="h-6 w-6 text-[#FFD23F]" />}
                </div>
                <CardDescription className="line-clamp-3 mt-2">
                    {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Easter Egg: Dunder Mifflin Property */}
                {project.dunderMifflin && (
                    <div className="text-[10px] text-muted-foreground/50 font-mono rotate-1 border border-dashed border-muted-foreground/30 p-1 w-fit mt-2">
                        Property of Dunder Mifflin Inc.
                    </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-4">
                <Link href={project.github} className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
                {project.real && (
                    <Link href={project.live} className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors">
                    <Globe className="mr-2 h-4 w-4" />
                    Live
                    </Link>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Easter Egg: Shaun Murphy Badge */}
      <div className="flex justify-center mt-16">
         <Badge variant="outline" className="py-2 px-4 gap-2 text-muted-foreground hover:text-primary transition-colors cursor-help" title="Autism Spectrum coding powers activated">
            <Stethoscope className="h-4 w-4" />
            Diagnosticando bugs como Shaun Murphy
         </Badge>
      </div>
    </section>
  );
}
