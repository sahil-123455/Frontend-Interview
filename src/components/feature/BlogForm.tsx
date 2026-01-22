import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateBlog } from "@/hooks/useCreateBlog";
import { useUpdateBlog } from "@/hooks/useUpdateBlog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Blog } from "@/types";

const blogSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    coverImage: z.string().url("Must be a valid URL"),
    content: z.string().min(20, "Content must be at least 20 characters"),
    category: z.string().min(1, "At least one category is required"),
});

type BlogFormValues = z.infer<typeof blogSchema>;

interface BlogFormProps {
    initialData?: Blog;
}

export const BlogForm = ({ initialData }: BlogFormProps) => {
    // Hooks for Create and Update
    const createMutation = useCreateBlog();
    const updateMutation = useUpdateBlog(initialData?.id || "");

    const isEditing = !!initialData;
    const mutation = isEditing ? updateMutation : createMutation;
    const isPending = mutation.status === "pending";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: initialData?.title || "",
            description: initialData?.description || "",
            content: initialData?.content || "",
            coverImage: initialData?.coverImage || "",
            category: initialData?.category.join(", ") || "",
        }
    });

    const onSubmit = (data: BlogFormValues) => {
        const categoryArray = data.category.split(',').map(c => c.trim().toUpperCase()).filter(c => c.length > 0);

        const payload = {
            ...data,
            category: categoryArray,
            // Keep original date if editing, else add new date
            date: isEditing ? initialData.date : new Date().toISOString(),
            isUserCreated: isEditing ? initialData.isUserCreated : true,
        };

        mutation.mutate(payload);
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg animate-in fade-in-50 zoom-in-95 duration-500">
            <CardHeader>
                <CardTitle>{isEditing ? "Edit Blog" : "Create New Blog"}</CardTitle>
                <CardDescription>
                    {isEditing ? "Update your blog post details." : "Share your thoughts with the world."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Blog Title</Label>
                        <Input id="title" placeholder="Enter a catchy title" {...register("title")} className={cn(errors.title && "border-destructive focus-visible:ring-destructive")} />
                        {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="category">Categories (Comma separated)</Label>
                            <Input id="category" placeholder="TECH, LIFESTYLE..." {...register("category")} className={cn(errors.category && "border-destructive focus-visible:ring-destructive")} />
                            {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coverImage">Cover Image URL</Label>
                            <Input id="coverImage" placeholder="https://..." {...register("coverImage")} className={cn(errors.coverImage && "border-destructive focus-visible:ring-destructive")} />
                            {errors.coverImage && <p className="text-destructive text-sm">{errors.coverImage.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Short Description</Label>
                        <Textarea id="description" placeholder="Brief summary of your post" className={cn("h-20 resize-none", errors.description && "border-destructive focus-visible:ring-destructive")} {...register("description")} />
                        {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" placeholder="Write your full story here..." className={cn("h-60", errors.content && "border-destructive focus-visible:ring-destructive")} {...register("content")} />
                        {errors.content && <p className="text-destructive text-sm">{errors.content.message}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {isEditing ? "Updating..." : "Publishing..."}
                            </>
                        ) : (
                            isEditing ? "Update Blog" : "Publish Blog"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
