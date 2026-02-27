import { describe, it, expect, vi, beforeEach } from "vitest";
import { getBlogPosts } from "../lib/mdx";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Mock dependencies
vi.mock("fs", () => ({
  default: {
    existsSync: vi.fn(),
    readdirSync: vi.fn(),
    readFileSync: vi.fn(),
  },
  existsSync: vi.fn(),
  readdirSync: vi.fn(),
  readFileSync: vi.fn(),
}));

vi.mock("path", () => ({
  default: {
    join: vi.fn(),
  },
  join: vi.fn(),
}));

vi.mock("gray-matter", () => ({
  default: vi.fn(),
  __esModule: true,
}));

describe("getBlogPosts", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return empty array if blogs path does not exist", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    const posts = getBlogPosts();
    expect(posts).toEqual([]);
  });

  it("should return posts sorted by date descending", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(path.join).mockImplementation((...args: string[]) =>
      args.join("/"),
    );
    // @ts-ignore - readdirSync overload mismatch in Vitest mock
    vi.mocked(fs.readdirSync).mockReturnValue([
      "post1.mdx",
      "post2.mdx",
      "post3.mdx",
    ] as unknown as string[]);

    const mockReadFileSync = vi.mocked(fs.readFileSync);
    mockReadFileSync.mockImplementation((filePath: unknown) => {
      if (typeof filePath !== "string") return "";
      if (filePath.endsWith("post1.mdx")) return "content1";
      if (filePath.endsWith("post2.mdx")) return "content2";
      if (filePath.endsWith("post3.mdx")) return "content3";
      return "";
    });

    const mockMatter = vi.mocked(matter);
    mockMatter.mockImplementation((content: unknown) => {
      if (content === "content1")
        return {
          data: { title: "Post 1", date: "2023-01-01", excerpt: "Excerpt 1" },
          content: "Body 1",
        } as unknown as ReturnType<typeof matter>;
      if (content === "content2")
        return {
          data: { title: "Post 2", date: "2023-02-01", excerpt: "Excerpt 2" },
          content: "Body 2",
        } as unknown as ReturnType<typeof matter>;
      if (content === "content3")
        return {
          data: { title: "Post 3", date: "2022-12-31", excerpt: "Excerpt 3" },
          content: "Body 3",
        } as unknown as ReturnType<typeof matter>;
      return { data: {}, content: "" } as unknown as ReturnType<typeof matter>;
    });

    const posts = getBlogPosts();

    expect(posts).toHaveLength(3);
    expect(posts[0].meta.date).toBe("2023-02-01");
    expect(posts[1].meta.date).toBe("2023-01-01");
    expect(posts[2].meta.date).toBe("2022-12-31");
  });
});
