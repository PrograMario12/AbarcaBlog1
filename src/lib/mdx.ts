import fs from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()
const blogsPath = path.join(root, 'src', 'content', 'blog')

export type BlogPost = {
    content: string
    meta: {
        title: string
        date: string
        excerpt: string
        slug: string
    }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    if (!existsSync(blogsPath)) {
        return []
    }

    const files = await fs.readdir(blogsPath)
    const posts = await Promise.all(
        files
            .filter((fileName) => fileName.endsWith('.mdx'))
            .map(async (fileName) => {
                const slug = fileName.replace(/\.mdx$/, '')
                const fullPath = path.join(blogsPath, fileName)
                const fileContents = await fs.readFile(fullPath, 'utf8')
                const { data, content } = matter(fileContents)

                return {
                    meta: {
                        title: data.title,
                        date: data.date,
                        excerpt: data.excerpt,
                        slug,
                    },
                    content,
                }
            })
    )

    return posts.sort((a, b) => (new Date(a.meta.date) < new Date(b.meta.date) ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(blogsPath, `${slug}.mdx`)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            meta: {
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                slug,
            },
            content,
        }
    } catch {
        return null
    }
}
