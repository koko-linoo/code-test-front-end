import { addTag, fetchAllTags, fetchTag } from "@services/tagService";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const tagKeys = "tags"

export const useGetTags = () => {
    return useQuery({
        queryKey: [tagKeys],
        queryFn: () => fetchAllTags(),
        staleTime: Infinity,
    });
}

export const useGetTag = (id: string | undefined) => {
    return useQuery({
        queryKey: [tagKeys, id],
        queryFn: () => fetchTag(id),
        staleTime: Infinity,
    });
}

export function useAddTag() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTag,
        onSuccess: () => {
            queryClient.invalidateQueries(tagKeys)
        },
    });
}

export function useUpdateTag() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTag,
        onSuccess: () => {
            queryClient.invalidateQueries(tagKeys)
        },
    });
}