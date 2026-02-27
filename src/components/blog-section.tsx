import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/mdx";

export async function BlogSection() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.slice(0, 3); // Get latest 3 posts

  return (
    <section className="container py-20 px-4 md:px-6 bg-muted/30">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end mb-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002D72] dark:text-[#FFD23F]">
                Bitácora de Vuelo
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
                Reflexiones sobre IA, Software y la vida entre Guerrero y Querétaro.
            </p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex items-center mt-4 sm:mt-0 text-sm font-medium text-blue-500 hover:text-blue-400">
            Ver todos los posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto max-w-5xl space-y-6">
          {posts.map((post) => (
            <Link key={post.meta.slug} href={`/blog/${post.meta.slug}`} className="block group">
              <div className="flex flex-col justify-between p-6 rounded-xl border bg-card/40 backdrop-blur-sm transition-all hover:bg-accent/50 group-hover:border-[#FFD23F]/50">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">{post.meta.date}</div>
                  <h3 className="font-semibold text-xl group-hover:text-[#FFD23F] transition-colors">
                      {post.meta.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">{post.meta.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
          <Link href="/blog" className="inline-flex sm:hidden items-center mt-4 text-sm font-medium text-blue-500 hover:text-blue-400">
            Ver todos los posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
    </section>
  );
}
