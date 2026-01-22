import { BlogForm } from "@/components/feature/BlogForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useBlog } from "@/hooks/useBlog";
import { Skeleton } from "@/components/ui/skeleton";

const EditBlogPage = () => {
    const { id } = useParams();
    const { data: blog, isLoading, isError } = useBlog(id || "");

    if (isLoading) {
        return (
            <div className="w-full max-w-[1400px] mx-auto space-y-6 px-6 py-12">
                <Skeleton className="h-10 w-32" />
                <div className="space-y-4 max-w-4xl mx-auto">
                    <Skeleton className="h-12 w-3/4 mx-auto" />
                    <Skeleton className="h-[600px] w-full rounded-xl" />
                </div>
            </div>
        );
    }

    if (isError || !blog) {
        return <div className="p-8 text-center text-destructive">Blog not found.</div>;
    }

    return (
        <div className="w-full max-w-[1400px] mx-auto space-y-6 px-6">
            <div className="w-full flex justify-start">
                <Link to={`/blogs/${id}`}>
                    <Button variant="ghost" className="pl-0 hover:pl-2 transition-all hover:bg-transparent hover:text-primary gap-2 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Button>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col items-center space-y-2 text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Edit Your Story</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Make updates to your blog post.
                    </p>
                </div>
                <BlogForm initialData={blog} />
            </div>
        </div>
    );
};

export default EditBlogPage;
