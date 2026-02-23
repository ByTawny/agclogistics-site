import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(raw)
      return {
        slug: data.slug || file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)
    const postSlug = data.slug || file.replace(".mdx", "")
    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        category: data.category,
        content,
      }
    }
  }
  return null
}
