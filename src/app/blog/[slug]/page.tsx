import { getPostBySlug, getBlogPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.meta.slug,
    }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container px-4 md:px-6 py-12 md:py-24 max-w-3xl mx-auto">
            <div className="mb-10 text-center">
                <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to blog
                </Link>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                    {post.meta.title}
                </h1>
                <div className="flex justify-center items-center gap-x-4 text-sm text-muted-foreground">
                    <time dateTime={post.meta.date} className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {post.meta.date}
                    </time>
                    <span className="rounded-full bg-secondary/50 px-3 py-1 font-medium text-foreground">
                        Technical
                    </span>
                </div>
            </div>

            <div className="prose prose-invert prose-blue max-w-none 
        prose-headings:text-foreground prose-headings:font-bold 
        prose-p:text-muted-foreground prose-p:leading-8 
        prose-a:text-blue-500 hover:prose-a:text-blue-400 
        prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded
        prose-pre:bg-muted prose-pre:border prose-pre:border-border">
                <MDXRemote source={post.content} />
            </div>
        </article>
    )
}
