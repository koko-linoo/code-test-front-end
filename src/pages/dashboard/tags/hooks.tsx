import {
  addTag,
  updateTag,
  fetchAllTags,
  fetchTag,
  deleteTag,
} from '@services/tagService';
import { message } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

const endpoint = '/dashboard/tags';

export const tag = 'tags';

export function useFetchTag(id: string | undefined): any {
  return useQuery({
    queryKey: [tag, id],
    queryFn: () => fetchTag(id),
    staleTime: Infinity,
  });
}

export function useDeleteTag(): any {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTag,
    onSuccess: (response) => {
      if (response.status === 200)
        queryClient.invalidateQueries(tag);
      else message.error(response.message);
    },
  });
}

export function useAddTag() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTag,
    onSuccess: (response: any) => {
      console.log(response)
      if (response.status === 201)
        queryClient
          .invalidateQueries(tag)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function useUpdateTag() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTag,
    onSuccess: (response: any) => {
      console.log(response)
      if (response.status === 200)
        queryClient
          .invalidateQueries(tag)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function fetchTagsQuery(keys?: any) {
  return useQuery({
    queryKey: [tag, keys],
    queryFn: () => fetchAllTags(keys),
    staleTime: Infinity,
  });
}

export function useFetchTags() {
  const [param, _] = useSearchParams();

  const { data, isFetching } = fetchTagsQuery({
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
