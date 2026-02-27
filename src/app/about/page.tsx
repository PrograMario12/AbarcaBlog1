import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code2, Rocket, Briefcase, GraduationCap, MapPin } from "lucide-react"

export const metadata = {
    title: "Sobre Mí | Mario Adair",
    description: "Conoce más sobre mi experiencia como Software Engineer e IA.",
}

export default function AboutPage() {
    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto flex flex-col gap-12 mt-16">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pb-8 border-b border-border/40">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-tr from-[#002D72] to-[#FFD23F] p-1 shadow-xl shrink-0">
                    <div className="w-full h-full bg-background rounded-xl overflow-hidden relative">
                        {/* Placeholder for real image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 text-muted-foreground text-sm font-medium">
                            [Tu Foto Aquí]
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mario Adair</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
                        <Code2 className="w-5 h-5" /> Senior Full Stack Engineer & AI Specialist
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
                        <Badge variant="secondary" className="px-3 py-1 bg-secondary/60 hover:bg-secondary">
                            <MapPin className="w-3 h-3 mr-1" /> CDMX, México
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1 border border-[#002D72]/20 dark:border-[#FFD23F]/20 text-[#002D72] dark:text-[#FFD23F] bg-[#002D72]/10 dark:bg-[#FFD23F]/10">
                            100% Águila 🦅
                        </Badge>
                    </div>
                    <p className="max-w-[600px] text-muted-foreground leading-relaxed pt-2">
                        Me especializo en diseñar y construir sistemas escalables impulsados por inteligencia artificial.
                        Mi objetivo es cerrar la brecha entre la investigación de IA de vanguardia y las aplicaciones
                        del mundo real que resuelven problemas reales.
                    </p>
                </div>
            </div>

            {/* Experience & Skills Grid */}
            <div className="grid md:grid-cols-3 gap-8">

                {/* Left Column - Experience */}
                <div className="col-span-2 space-y-8">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-blue-500" />
                            Experiencia Profesional
                        </h2>

                        <div className="space-y-6 border-l-2 border-muted pl-6 ml-3 relative">
                            {[
                                {
                                    role: "Senior AI Engineer",
                                    company: "Tech Innovators",
                                    date: "2024 - Presente",
                                    description: "Liderando la integración de LLMs y arquitecturas RAG para productos empresariales. Creación de agentes autónomos que redujeron el tiempo de procesamiento manual en un 40%."
                                },
                                {
                                    role: "Full Stack Developer",
                                    company: "StartUp Global",
                                    date: "2021 - 2024",
                                    description: "Desarrollo de microservicios con Node.js y Python. Diseño de interfaces interactivas con React y Next.js."
                                }
                            ].map((job, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-background border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />
                                    <h3 className="text-lg font-bold">{job.role} <span className="text-muted-foreground font-normal">@ {job.company}</span></h3>
                                    <span className="text-sm text-blue-400 font-medium">{job.date}</span>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6 pt-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-blue-500" />
                            Educación
                        </h2>

                        <div className="space-y-6 border-l-2 border-muted pl-6 ml-3 relative">
                            <div className="relative group">
                                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-background border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />
                                <h3 className="text-lg font-bold">Ingeniería en Sistemas Computacionales</h3>
                                <span className="text-sm text-blue-400 font-medium">Universidad Autónoma - 2017 a 2021</span>
                                <p className="mt-2 text-muted-foreground leading-relaxed">Especialidad en Inteligencia Artificial y Algoritmos Avanzados.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column - Skills & Values */}
                <div className="col-span-1 space-y-8">
                    <Card className="bg-card/60 backdrop-blur-md border-border/50 shadow-lg hover:border-blue-500/30 transition-colors">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-500" />
                                Stack Técnico
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "TypeScript", "Next.js", "PyTorch", "LangChain", "Docker", "AWS", "SQL"].map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/60 backdrop-blur-md border-border/50 shadow-lg hover:border-blue-500/30 transition-colors">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Rocket className="w-5 h-5 text-orange-500" />
                                Intereses
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Cuando no estoy entrenando modelos de lenguaje o refactorizando código,
                                seguramente me encontrarás leyendo libros de ciencia ficción o apoyando al América. ⚽🤖
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}
