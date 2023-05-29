import { addPost, fetchAllPosts, fetchPost } from "@services/postService";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const postKeys = "posts"

export interface PaginatedQuery {
    skip: number;
    take: number;
    filter?: Object;
    orderBy?: string;
}

export const useGetPosts = (params?: PaginatedQuery) => {
    return useQuery({
        queryKey: [postKeys, params],
        queryFn: () => fetchAllPosts(params),
        staleTime: Infinity,
        onError(err) {
            console.log(err)
        },
    });
}

export const useGetPost = (id: number) => {
    return useQuery({
        queryKey: [postKeys, id],
        queryFn: () => fetchPost(id),
        staleTime: Infinity,
    });
}

export function useAddPost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(postKeys)
        },
    });
}

export function useUpdatePost() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(postKeys)
        },
    });
}