import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                <span className="text-[#002D72] dark:text-[#FFD23F]">Mario Adair</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFD23F] text-[#002D72] font-semibold hidden sm:inline-block">AI Engineer</span>
            </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="/#projects" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#002D72] dark:hover:text-[#FFD23F] transition-colors">
            Sobre Mí
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
