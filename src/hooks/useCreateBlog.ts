import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/services/api/blogs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export const useCreateBlog = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            toast({
                title: "Success",
                description: "Blog post created successfully!",
            });
            navigate("/");
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to create blog post. Please try again.",
            });
            console.error("Create blog error:", error);
        },
    });
};
