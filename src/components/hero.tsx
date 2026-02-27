"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b pb-20 pt-32 md:pb-32 md:pt-48 bg-gradient-to-b from-[#002D72] via-[#001f52] to-[#002D72]">
      {/* Background stylized Querétaro Skyline & Guerrero Map hints */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
         {/* Simple CSS shapes representing abstract skyline */}
         <div className="absolute bottom-0 left-0 right-0 h-64 bg-repeat-x opacity-30 bg-[linear-gradient(to_top,#FFD23F_0%,transparent_100%)]"></div>

         {/* Stylized Guerrero Map Outline (Abstract SVG) */}
         <div className="absolute top-20 right-10 w-64 h-64 opacity-10 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD23F" d="M45,-75C58.3,-69.3,69.2,-59.4,75.3,-47.6C81.5,-35.8,82.9,-22.1,81.3,-9.1C79.7,3.9,75.1,16.2,67.6,26.7C60.1,37.2,49.7,45.9,38.6,53.3C27.5,60.7,15.7,66.8,2.7,62.2C-10.3,57.5,-24.5,42.1,-37.2,28.8C-49.9,15.5,-61.1,4.3,-62.7,-8.4C-64.3,-21.1,-56.3,-35.3,-45.6,-45.3C-34.9,-55.3,-21.5,-61.1,-8.3,-60.9C4.9,-60.7,9.8,-54.5,14.7,-48.3L45,-75Z" transform="translate(100 100)" />
            </svg>
         </div>
      </div>

      {/* Eagle Scroll Animation */}
      <div className="absolute inset-x-0 top-1/4 pointer-events-none z-0 overflow-hidden h-32 w-full">
          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 text-white/5 absolute top-0 left-0"
          >
             {/* Abstract Eagle Silhouette SVG */}
             <svg viewBox="0 0 100 100" fill="currentColor">
               <path d="M10,50 Q30,20 50,50 T90,50 L50,80 Z" />
             </svg>
          </motion.div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
        >
            <Badge variant="outline" className="px-4 py-1.5 text-sm border-2 border-[#FFD23F] text-[#FFD23F] bg-[#002D72]/50 hover:bg-[#FFD23F] hover:text-[#002D72] transition-colors">
              🇲🇽 Guerrero → Querétaro
            </Badge>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
              Mario Adair <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD23F] to-[#FFE680]">
                Software Engineer
              </span>
            </h1>

            <p className="max-w-[42rem] text-xl text-gray-200 sm:text-2xl sm:leading-8 font-light">
              Ingeniero Software UAQ → Maestría IA
            </p>

            <p className="max-w-[42rem] text-lg text-gray-300">
               Transformando ideas en realidad con <span className="font-bold text-[#FFD23F]">IA</span> y <span className="font-bold text-[#FFD23F]">Código Mexicano</span>.
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="#projects">
                <Button size="lg" className="rounded-full bg-[#FFD23F] text-[#002D72] hover:bg-[#ffe066] font-bold text-lg px-8">
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="rounded-full border-[#FFD23F] text-[#FFD23F] hover:bg-[#FFD23F] hover:text-[#002D72] font-bold text-lg px-8">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
