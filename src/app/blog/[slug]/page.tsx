import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { Calendar, User, ArrowLeft, ChevronRight } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

// Simple markdown renderer (no MDX runtime needed for basic content)
function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#0f172a] mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#0f172a] mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[#0f172a]">$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#0b5fff] underline hover:text-[#0044cc]">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li[^>]*>.*?<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-1.5 my-4 text-[#475569]">$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/^(?!<[h|u|l]).+$/gm, (line) => line.trim() ? `<p class="text-[#475569] leading-relaxed my-4">${line}</p>` : '')
    .trim()
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const allPosts = getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#0b5fff] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <article
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            className="prose prose-slate max-w-none"
          />

          <div className="border-t border-[#e2e8f0] pt-8 mt-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-[#64748b] text-sm">
                Vous avez des questions sur notre service ?
              </p>
              <Button asChild>
                <Link href="/contact">
                  Nous contacter <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">À lire également</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block p-4 rounded-xl border border-[#e2e8f0] hover:border-[#0b5fff]/30 hover:bg-[#f8fafc] transition-all"
                  >
                    <Badge variant="secondary" className="mb-2 text-xs">{p.category}</Badge>
                    <h3 className="font-semibold text-[#0f172a] text-sm leading-snug hover:text-[#0b5fff] transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
