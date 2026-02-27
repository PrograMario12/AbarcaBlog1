import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';

// Ensure we are in the repo root
const REPO_ROOT = process.cwd();
const TEMP_ROOT = path.join(REPO_ROOT, 'temp_bench');
const BLOG_DIR = path.join(TEMP_ROOT, 'src', 'content', 'blog');

function setup() {
    if (fs.existsSync(TEMP_ROOT)) {
        fs.rmSync(TEMP_ROOT, { recursive: true, force: true });
    }
    fs.mkdirSync(BLOG_DIR, { recursive: true });

    // Create 50 files
    // 500KB content
    const content = 'a'.repeat(1024 * 500);
    for (let i = 0; i < 50; i++) {
        const fileContent = `---
title: "Benchmark Post ${i}"
date: "2023-01-01"
excerpt: "This is a benchmark post."
---

${content}
`;
        fs.writeFileSync(path.join(BLOG_DIR, `post-${i}.mdx`), fileContent);
    }
    console.log(`Created 50 files of 500KB each in ${BLOG_DIR}`);
}

function cleanup() {
    if (fs.existsSync(TEMP_ROOT)) {
        fs.rmSync(TEMP_ROOT, { recursive: true, force: true });
    }
    console.log("Cleanup done.");
}

async function runBenchmark() {
    // We need to set the environment variable BEFORE importing mdx.ts
    // because the module-level constant `blogsPath` is initialized on import.
    process.env.BLOG_POSTS_PATH = BLOG_DIR;

    setup();

    try {
        console.log("Starting benchmark...");

        // Dynamic import to ensure env var is picked up
        const { getBlogPosts } = await import('../src/lib/mdx');

        const start = performance.now();
        const posts = getBlogPosts();
        const end = performance.now();

        console.log(`Found ${posts.length} posts.`);
        console.log(`Time taken: ${(end - start).toFixed(2)} ms`);

    } catch (e) {
        console.error("Benchmark failed:", e);
    } finally {
        cleanup();
    }
}

runBenchmark();
