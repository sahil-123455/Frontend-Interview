import { useBlog } from "@/hooks/useBlog";
import { useParams, Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  Calendar,
  User,
  Clock,
  Share2,
  Pencil,
  Trash2,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteBlog } from "@/hooks/useDeleteBlog";
import { useEffect, useState } from "react";

export const BlogDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { data: blog, isLoading, isError } = useBlog(id || "");
  const deleteBlogMutation = useDeleteBlog();

  /* 🔥 Reading Progress */
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const current = window.scrollY;
      setProgress(Math.min(100, (current / total) * 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* EMPTY STATE */
  if (!id) {
    return (
      <div className="h-full min-h-[calc(100vh-5rem)] flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2070"
            className="w-full h-full object-cover opacity-30"
            alt="Deep Space"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-md text-center space-y-6 glass-card rounded-[2.5rem] p-12">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            <Sparkles className="w-10 h-10 text-primary animate-pulse" />
          </div>

          <h3 className="text-4xl font-black italic">Select a Story</h3>
          <p className="text-muted-foreground">
            Choose an article from the left panel to begin reading.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="p-12 space-y-8">
        <Skeleton className="h-[450px] w-full rounded-[2.5rem]" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-32 w-full" />
      </div>
    );

  if (isError || !blog)
    return (
      <div className="h-screen flex items-center justify-center text-destructive">
        Article not found.
      </div>
    );

  return (
    <article className="relative pb-24">

      {/* 🔥 Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HERO */}
      <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] mb-20">
        <img
          src={blog.coverImage}
          className="w-full h-full object-cover"
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute bottom-14 left-10 right-10 max-w-5xl">
          <div className="flex gap-3 mb-6 flex-wrap">
            {blog.category.map((cat) => (
              <Badge
                key={cat}
                className="bg-primary px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-black italic leading-[0.95]">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest text-muted-foreground border-b pb-8 mb-14">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            CA Monk Insights
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {format(new Date(blog.date), "MMM d, yyyy")}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {Math.max(1, Math.ceil(blog.content.length / 600))} min read
          </div>
        </div>

        <p className="text-2xl italic text-muted-foreground mb-16 border-l-4 border-primary pl-8">
          {blog.description}
        </p>

        <div className="space-y-10 text-lg leading-[1.9]">
          {blog.content.split("\n").map(
            (p, i) =>
              p.trim() && (
                <p
                  key={i}
                  className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-3"
                >
                  {p}
                </p>
              )
          )}
        </div>

        {/* ACTIONS */}
        <div className="mt-24 pt-12 border-t flex flex-wrap gap-6 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 h-16 text-xs font-black uppercase"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast({ title: "Link copied!" });
            }}
          >
            <Share2 className="mr-3 h-5 w-5" /> Share
          </Button>

          {blog.isUserCreated && (
            <>
              <Link to={`/blogs/${blog.id}/edit`}>
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-16">
                  <Pencil className="mr-3 h-5 w-5" /> Edit
                </Button>
              </Link>

              <Button
                size="lg"
                variant="destructive"
                className="rounded-full px-10 h-16"
                disabled={deleteBlogMutation.isPending}
                onClick={() =>
                  window.confirm("Delete this article?") &&
                  deleteBlogMutation.mutate(blog.id)
                }
              >
                {deleteBlogMutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Trash2 className="mr-3 h-5 w-5" /> Delete
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
