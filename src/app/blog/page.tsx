import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getAllPosts } from "@/lib/blog"
import { Calendar, User, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Actualités et conseils sur la livraison santé",
  description:
    "Articles et conseils sur la livraison de médicaments à domicile en Martinique, le partenariat pharmacies, et la conformité RGPD en logistique santé.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl max-w-3xl">
          <Badge variant="default" className="mb-4">Blog & Actualités</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Nos articles et conseils
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed">
            Informations pratiques sur la livraison de médicaments, les partenariats
            pharmacies et la conformité RGPD en logistique santé en Martinique.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col hover:border-[#0b5fff]/30 transition-colors">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#0b5fff] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-xs text-[#94a3b8] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0b5fff] hover:text-[#0044cc] transition-colors"
                  >
                    Lire l&apos;article
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
