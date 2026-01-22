import { Link, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import type { Blog } from "@/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const { id: activeId } = useParams();
  const isActive = activeId === blog.id;

  return (
    <Link to={`/blogs/${blog.id}`} className="block group outline-none">
      <Card
        className={cn(
          "relative overflow-hidden rounded-3xl border transition-all duration-500",
          "bg-card/40 backdrop-blur-xl",
          "hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]",
          "hover:border-primary/40",
          isActive
            ? "ring-2 ring-primary bg-card shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            : "border-border/40"
        )}
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />

        {/* IMAGE */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070";
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category */}
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold
            px-3 py-1 rounded-full backdrop-blur-md
            bg-primary/90 text-white shadow-lg">
            {blog.category[0] || "General"}
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col h-full">
          <h3
            className={cn(
              "text-lg font-semibold leading-snug tracking-tight line-clamp-2 transition-colors",
              isActive
                ? "text-primary"
                : "group-hover:text-primary"
            )}
          >
            {blog.title}
          </h3>

          <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
            {blog.description}
          </p>

          {/* META */}
          <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary">CM</span>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Admin
              </span>
            </div>

            <span className="text-[11px] text-muted-foreground/70">
              {blog.date
                ? formatDistanceToNow(new Date(blog.date), { addSuffix: true })
                : "Just now"}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
