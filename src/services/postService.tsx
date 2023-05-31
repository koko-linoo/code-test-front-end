import api from "@api";

export interface PostModel {
    id?: number;
    title: string;
    user?: {
        username: string;
    } | undefined;
    categoryId?: number;
    content: string;
    benefit: string;
    imageUrl: string;
    createdAt: string;
}

export interface PaginatedResult<T> {
    status: number;
    message: string;
    response: {
        total: number;
        list: T[];
    };
}

const endpoint = "/posts";

export async function fetchAllPosts(params?: any): Promise<PaginatedResult<PostModel>> {
    const result = await api.get(endpoint, { params: params });
    return result.data;
}

export async function fetchPost(id: string | undefined) {
    const result = await api.get(`${endpoint}/${id}`).catch(() => null)
    return result?.data;
}

export async function addPost(data: any): Promise<PostModel> {
    return await api.post(endpoint, data);
}

export async function updatePost({ id, ...data }: any): Promise<PostModel> {
    return await api.patch(`${endpoint}/${id}`, data);
}

export async function deletePost(id: number): Promise<any> {
    return api.delete(`${endpoint}/${id}`);
}