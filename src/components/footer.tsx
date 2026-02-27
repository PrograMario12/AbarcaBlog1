import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0 bg-background">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    2026. Built with Next.js & AI.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/tu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/tu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:tu-email@example.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
