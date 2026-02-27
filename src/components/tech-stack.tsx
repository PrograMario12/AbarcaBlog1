"use client";

import { motion } from "framer-motion";
import { TerminalSquare, BrainCircuit, Cpu, Database, Server, Code, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface TechItem {
  name: string;
  type: string;
  icon: LucideIcon;
  easterEgg?: boolean;
}

const techStack: TechItem[] = [
  { name: "PyTorch", type: "AI/ML", icon: BrainCircuit },
  { name: "TensorFlow", type: "AI/ML", icon: Cpu },
  { name: "LangChain", type: "Agents", icon: Database },
  { name: "React", type: "Frontend", icon: Code, easterEgg: true },
  { name: "Next.js", type: "Framework", icon: TerminalSquare },
  { name: "Node.js", type: "Backend", icon: Server },
];

export function TechStack() {
  return (
    <section className="container py-20 px-4 md:px-6 bg-background relative overflow-hidden">
        {/* Animated América Shield Background Effect */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD23F]/5 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#002D72] dark:text-[#FFD23F]">
             Arsenal Tecnológico
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Herramientas de clase mundial para soluciones de alto impacto.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => (
             <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
    </section>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Card className="flex flex-col items-center justify-center p-6 h-full border-[#002D72]/20 dark:border-[#FFD23F]/20 hover:border-[#FFD23F] dark:hover:border-[#FFD23F] transition-colors bg-card/50 backdrop-blur-sm">
                 {/* Easter Egg for React: Homer Icon on Hover */}
                 <div className="relative w-8 h-8 mb-3 flex items-center justify-center">
                    {tech.easterEgg && hovered ? (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="text-2xl"
                            title="Mmm... React"
                        >
                            🍩
                        </motion.div>
                    ) : (
                        <tech.icon className={`h-8 w-8 text-[#002D72] dark:text-[#FFD23F] transition-opacity duration-300 ${tech.easterEgg && hovered ? 'opacity-0 absolute' : 'opacity-100'}`} />
                    )}
                 </div>

                <span className="font-bold text-sm">{tech.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{tech.type}</span>
            </Card>
        </motion.div>
    );
}
