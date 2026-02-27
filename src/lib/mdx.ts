import fs from 'fs'
import { promises as fsPromises } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()
const blogsPath = process.env.BLOG_POSTS_PATH || path.join(root, 'src', 'content', 'blog')

export type BlogPost = {
    content?: string
    meta: {
        title: string
        date: string
        excerpt: string
        slug: string
    }
}

// Optimization: Read only the beginning of the file to extract frontmatter
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseFrontmatter(filePath: string): any {
    let fd: number | null = null
    try {
        fd = fs.openSync(filePath, 'r')
        const buffer = Buffer.alloc(4096) // Read first 4KB
        const bytesRead = fs.readSync(fd, buffer, 0, 4096, 0)
        const partialContent = buffer.toString('utf8', 0, bytesRead)

        // Use gray-matter on the partial content
        // We verify the frontmatter is fully contained.
        if (partialContent.startsWith('---')) {
            const endOfFrontmatter = partialContent.indexOf('\n---', 3)
            if (endOfFrontmatter !== -1) {
                const frontmatterContent = partialContent.substring(0, endOfFrontmatter + 4)
                return matter(frontmatterContent).data
            }
        }
    } catch {
        // Fallback
    } finally {
        if (fd !== null) {
            try {
                fs.closeSync(fd)
            } catch {
                // Ignore close error
            }
        }
    }

    // Fallback: read entire file if frontmatter is huge or error occurred
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return matter(fileContents).data
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

            // Optimization: Only read frontmatter
            const data = parseFrontmatter(fullPath)

            return {
                meta: {
                    title: data.title,
                    date: data.date,
                    excerpt: data.excerpt,
                    slug,
                },
                // content is omitted/undefined here for performance
            }
        })

    return posts.sort((a, b) => (new Date(a.meta.date) < new Date(b.meta.date) ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(blogsPath, `${slug}.mdx`)
        const fileContents = await fsPromises.readFile(fullPath, 'utf8')
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
