import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getBlogPosts } from '../lib/mdx'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Mock dependencies
vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>()
  return {
    default: {
      ...actual,
      existsSync: vi.fn(),
      readdirSync: vi.fn(),
      readFileSync: vi.fn(),
    },
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    readFileSync: vi.fn(),
  }
})

vi.mock('path', async (importOriginal) => {
  const actual = await importOriginal<typeof import('path')>()
  return {
    default: {
      ...actual,
      join: vi.fn(),
    },
    join: vi.fn(),
  }
})

vi.mock('gray-matter', async (importOriginal) => {
    return {
        default: vi.fn(),
    }
})


describe('getBlogPosts', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should return empty array if blogs path does not exist', () => {
    (fs.existsSync as any).mockReturnValue(false)
    const posts = getBlogPosts()
    expect(posts).toEqual([])
  })

  it('should return posts sorted by date descending', () => {
    (fs.existsSync as any).mockReturnValue(true);
    (path.join as any).mockImplementation((...args: any[]) => args.join('/'));
    (fs.readdirSync as any).mockReturnValue([
      'post1.mdx',
      'post2.mdx',
      'post3.mdx',
    ])

    const mockReadFileSync = fs.readFileSync as any;
    mockReadFileSync.mockImplementation((filePath: string) => {
      if (filePath.endsWith('post1.mdx')) return 'content1'
      if (filePath.endsWith('post2.mdx')) return 'content2'
      if (filePath.endsWith('post3.mdx')) return 'content3'
      return ''
    })

    const mockMatter = matter as unknown as any;
    mockMatter.mockImplementation((content: string) => {
      if (content === 'content1') return { data: { title: 'Post 1', date: '2023-01-01', excerpt: 'Excerpt 1' }, content: 'Body 1' }
      if (content === 'content2') return { data: { title: 'Post 2', date: '2023-02-01', excerpt: 'Excerpt 2' }, content: 'Body 2' }
      if (content === 'content3') return { data: { title: 'Post 3', date: '2022-12-31', excerpt: 'Excerpt 3' }, content: 'Body 3' }
      return { data: {}, content: '' }
    })

    const posts = getBlogPosts()

    expect(posts).toHaveLength(3)
    expect(posts[0].meta.date).toBe('2023-02-01')
    expect(posts[1].meta.date).toBe('2023-01-01')
    expect(posts[2].meta.date).toBe('2022-12-31')
  })
})
