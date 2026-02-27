import fs from 'fs'
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

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(blogsPath)) {
        return []
    }

    const files = fs.readdirSync(blogsPath)
    const posts = files
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fullPath = path.join(blogsPath, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
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
        .sort((a, b) => (new Date(a.meta.date) < new Date(b.meta.date) ? 1 : -1))

    return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogsPath, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
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
