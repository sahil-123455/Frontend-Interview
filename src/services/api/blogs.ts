import { api } from "@/lib/axios";
import type { Blog, CreateBlogDTO } from "@/types";

export const getBlogs = async (): Promise<Blog[]> => {
    const response = await api.get<Blog[]>("/blogs");
    return response.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
    const response = await api.get<Blog>(`/blogs/${id}`);
    return response.data;
};

export const createBlog = async (data: CreateBlogDTO): Promise<Blog> => {
    const newBlog = {
        ...data,
        date: new Date().toISOString(),
        // Generate a random ID since JSON server might not auto-increment string IDs well if not configured. 
        // Actually JSON server auto-generates IDs if omitted, but let's see. 
        // We'll let JSON Server handle ID but we provide date.
    };
    const response = await api.post<Blog>("/blogs", newBlog);
    return response.data;
};

export const updateBlog = async (id: string, data: Partial<CreateBlogDTO>): Promise<Blog> => {
    const response = await api.patch<Blog>(`/blogs/${id}`, data);
    return response.data;
};

export const deleteBlog = async (id: string): Promise<void> => {
    await api.delete(`/blogs/${id}`);
};
