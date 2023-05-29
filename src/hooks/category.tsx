import { addCategory, fetchAllCategories, fetchCategory } from "@services/categoryService";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const categoryKeys = "categories"

export const useGetCategorys = () => {
    return useQuery({
        queryKey: [categoryKeys],
        queryFn: () => fetchAllCategories(),
        staleTime: Infinity,
    });
}

export const useGetCategory = (id: number) => {
    return useQuery({
        queryKey: [categoryKeys, id],
        queryFn: () => fetchCategory(id),
        staleTime: Infinity,
    });
}

export function useAddCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(categoryKeys)
        },
    });
}

export function useUpdateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addCategory,
        onSuccess: () => {
            queryClient.invalidateQueries(categoryKeys)
        },
    });
}