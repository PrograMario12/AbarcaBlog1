import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <span className="font-bold text-[#002D72] dark:text-[#FFD23F]">Mario Adair</span>.
            Hosted on Vercel.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm font-bold text-[#002D72] dark:text-[#FFD23F] animate-pulse">
            ¡Arriba el América! 💛💙
        </div>

        <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
