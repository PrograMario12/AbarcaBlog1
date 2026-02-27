import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const displayedProjects = projects.filter(p => p.showInProjects);

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24">
            <div className="flex flex-col items-start space-y-4 mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">My Projects</h1>
                <p className="text-muted-foreground text-lg max-w-[800px]">
                    Here you&apos;ll find a collection of my professional and open-source work. From AI-driven backend systems to pixel-perfect frontend interfaces.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project, i) => (
                    <Card key={i} className="flex flex-col overflow-hidden transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 bg-card/60 backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start">
                                <span className="text-xl font-bold">{project.title}</span>
                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                            </CardTitle>
                            <CardDescription className="pt-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="bg-secondary/60 hover:bg-secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4 border-t pt-4 bg-muted/20">
                            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium hover:text-blue-500 transition-colors">
                                <Github className="mr-2 h-4 w-4" />
                                Source
                            </a>
                            <a href="#" className="inline-flex items-center text-sm font-medium hover:text-blue-500 transition-colors">
                                <Globe className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
