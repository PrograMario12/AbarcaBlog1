import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <TechStack />
      <Projects />
      <BlogSection />
    </div>
  )
}
