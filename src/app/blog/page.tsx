import Link from "next/link"
import { getBlogPosts } from "@/lib/mdx"
import { ArrowRight, CalendarDays } from "lucide-react"

export default function BlogPage() {
    const posts = getBlogPosts()

    return (
        <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
            <div className="flex flex-col items-start space-y-4 mb-12 border-b border-border/40 pb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Engineering Notebook</h1>
                <p className="text-muted-foreground text-lg max-w-[800px]">
                    Thoughts, technical deep dives, and musings on Software Architecture, Artificial Intelligence, and the intersection of both.
                </p>
            </div>

            <div className="space-y-12">
                {posts.map((post) => (
                    <article key={post.meta.slug} className="group flex flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.meta.date} className="text-muted-foreground flex items-center">
                                <CalendarDays className="mr-1 h-3 w-3" />
                                {post.meta.date}
                            </time>
                            <span className="relative z-10 rounded-full bg-secondary/50 px-3 py-1.5 font-medium text-foreground hover:bg-secondary">
                                Technical
                            </span>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-2xl font-bold leading-6 text-foreground group-hover:text-blue-500 transition-colors">
                                <Link href={`/blog/${post.meta.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.meta.title}
                                </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                {post.meta.excerpt}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-x-4">
                            <Link href={`/blog/${post.meta.slug}`} className="text-sm font-semibold leading-6 text-blue-500 hover:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center">
                                Read article <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
