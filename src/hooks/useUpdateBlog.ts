import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBlog } from "@/services/api/blogs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { CreateBlogDTO } from "@/types";

export const useUpdateBlog = (id: string) => {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: Partial<CreateBlogDTO>) => updateBlog(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            queryClient.invalidateQueries({ queryKey: ["blog", id] });
            toast({
                title: "Success",
                description: "Blog post updated successfully!",
            });
            navigate(`/blogs/${id}`);
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to update blog post. Please try again.",
            });
            console.error("Update blog error:", error);
        },
    });
};
