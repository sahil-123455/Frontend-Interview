import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/services/api/blogs";

export const useBlog = (id: string) => {
    return useQuery({
        queryKey: ["blogs", id],
        queryFn: () => getBlogById(id),
        enabled: !!id,
    });
};
