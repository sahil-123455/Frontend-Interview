import { useBlogs } from "@/hooks/useBlogs";
import { BlogCard } from "@/components/feature/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

export const BlogList = () => {
  const { data: blogs, isLoading, isError } = useBlogs();
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs?.filter((blog) =>
    [blog.title, blog.description, ...blog.category]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full rounded-2xl" />
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-64 w-full rounded-3xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-destructive bg-destructive/10 rounded-2xl">
        Failed to load blogs.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* SEARCH */}
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Search articles, topics, categories…"
          className="pl-12 h-12 rounded-2xl bg-background/80 backdrop-blur-md border border-border/40
          focus-visible:ring-primary/30"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LIST */}
      <div className="space-y-8">
        {filteredBlogs?.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No articles found for “{search}”
          </div>
        ) : (
          filteredBlogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </div>
    </div>
  );
};
