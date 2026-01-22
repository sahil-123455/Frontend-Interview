import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/api/blogs";

export const useBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: getBlogs,
    });
};
