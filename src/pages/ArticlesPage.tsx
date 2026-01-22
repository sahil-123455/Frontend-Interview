import { useState } from "react"
import { useBlogs } from "@/hooks/useBlogs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArticleModal } from "@/components/feature/ArticleModal"

const ArticlesPage = () => {
  const { data: blogs, isLoading } = useBlogs()
  const [selectedBlog, setSelectedBlog] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-black tracking-tight">
          Articles
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Explore insights, career advice, finance trends, and technology stories curated by CA Monk.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && (
          <p className="text-muted-foreground">Loading articles...</p>
        )}

        {blogs?.map((blog) => (
          <Card
            key={blog.id}
            className="
              group relative overflow-hidden
              bg-card/40 backdrop-blur-xl
              border border-border/40
              rounded-3xl
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]
              transition-all duration-500
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div className="aspect-[16/10] overflow-hidden rounded-t-3xl">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex gap-2 mb-4 flex-wrap">
                {blog.category.map((c: string) => (
                  <Badge
                    key={c}
                    className="bg-primary/20 text-primary border border-primary/30 text-[10px] uppercase tracking-widest"
                  >
                    {c}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                {blog.description}
              </p>

              {/* BUTTON — NOW VISIBLE */}
              <Button
                onClick={() => setSelectedBlog(blog)}
                className="
                  mt-auto
                  rounded-full
                  font-bold
                  tracking-widest
                  uppercase
                "
              >
                Read Article
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      {selectedBlog && (
        <ArticleModal
          blog={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </div>
  )
}

export default ArticlesPage
