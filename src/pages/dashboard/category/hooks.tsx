import {
  addCategory,
  updateCategory,
  fetchAllCategories,
  fetchCategory,
  deleteCategory,
} from '@services/categoryService';
import { message } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

const endpoint = '/dashboard/category';

export const category = 'category';

export function useFetchCategory(id: string | undefined): any {
  return useQuery({
    queryKey: [category, id],
    queryFn: () => fetchCategory(id),
    staleTime: Infinity,
  });
}

export function useDeleteCategory(): any {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: (response) => {
      if (response.status === 200)
        queryClient.invalidateQueries(category);
      else message.error(response.message);
    },
  });
}

export function useAddCategory() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCategory,
    onSuccess: (response: any) => {
      if (response.status === 201)
        queryClient
          .invalidateQueries(category)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function useUpdateCategory() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: (response: any) => {
      console.log(response)
      if (response.status === 200)
        queryClient
          .invalidateQueries(category)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function fetchCategorysQuery(keys?: any) {
  return useQuery({
    queryKey: [category, keys],
    queryFn: () => fetchAllCategories(keys),
    staleTime: Infinity,
  });
}

export function useFetchCategorys() {
  const [param, _] = useSearchParams();

  const { data, isFetching } = fetchCategorysQuery({
    skip: (parseInt(param.get('current') ?? '1') * 1 - 1) * 10,
    take: 10,
    filter: param.get('filter') ? param.get('filter') : undefined,
  });

  return {
    total: data?.response.total ?? 0,
    isLoading: isFetching,
    list: data?.response.list ?? [],
  };
}
