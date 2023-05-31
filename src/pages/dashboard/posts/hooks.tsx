import {
  addPost,
  updatePost,
  fetchAllPosts,
  fetchPost,
  deletePost,
} from '@services/postService';
import { message } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

const endpoint = '/dashboard/posts';

export const post = 'posts';

export function useFetchPost(id: string | undefined): any {
  return useQuery({
    queryKey: [post, id],
    queryFn: () => fetchPost(id),
    staleTime: Infinity,
  });
}

export function useDeletePost(): any {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: (response) => {
      if (response.status === 200)
        queryClient.invalidateQueries(post);
      else message.error(response.message);
    },
  });
}

export function useAddPost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPost,
    onSuccess: (response: any) => {
      if (response.status === 201)
        queryClient
          .invalidateQueries(post)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function useUpdatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (response: any) => {
      if (response.status === 200)
        queryClient
          .invalidateQueries(post)
          .then(() => navigate(endpoint));
      else message.error(response.message);
    },
  });
}

export function fetchPostsQuery(keys?: any) {
  return useQuery({
    queryKey: [post, keys],
    queryFn: () => fetchAllPosts(keys),
    staleTime: Infinity,
  });
}

export function useFetchPosts() {
  const [param, _] = useSearchParams();
  let title = param.get('filter') ? param.get('filter') : undefined;
  const { data, isFetching } = fetchPostsQuery({
    skip: (parseInt(param.get('current') ?? '1') * 1 - 1) * 10,
    take: 10,
    filter: JSON.stringify({
      title: {
        contains: title,
      },
    }),
  });

  return {
    total: data?.response.total ?? 0,
    isLoading: isFetching,
    list: data?.response.list ?? [],
  };
}
