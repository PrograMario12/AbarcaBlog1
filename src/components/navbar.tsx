"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Hexagon } from "lucide-react"

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 text-primary font-bold">
                    <Hexagon className="w-6 h-6 text-blue-500" />
                    <span className="font-mono tracking-tight text-lg">
                        AI_Engineer<span className="text-blue-500 animate-pulse">_</span>
                    </span>
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/projects") ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blog"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/blog") ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    )
}
