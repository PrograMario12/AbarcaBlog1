"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle"; // Assuming this exists or will be created/replaced
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                <span className="text-[#002D72] dark:text-[#FFD23F]">Mario Adair</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFD23F] text-[#002D72] font-semibold hidden sm:inline-block">AI Engineer</span>
            </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#projects" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Sobre Mí
          </Link>
          {/* Theme Toggle Placeholder */}
           <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
             🌙
           </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <div className="container flex flex-col gap-4 p-4 pb-6">
              <Link
                href="/#projects"
                className="text-lg font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Mí
              </Link>
               <div className="flex items-center gap-2 text-lg font-medium">
                 <span>Tema:</span>
                 <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                   🌙
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
