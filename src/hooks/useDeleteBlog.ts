import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "@/services/api/blogs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useDeleteBlog = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: deleteBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            toast({
                title: "Deleted",
                description: "Blog post has been deleted.",
            });
            navigate("/");
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to delete blog post. Please try again.",
            });
            console.error("Delete blog error:", error);
        },
    });
};
