import api from "@api";

export interface PostModel {
    id: number;
    title: string;
    user: {
        username: string;
    };
    categoryId: number;
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

export async function fetchPost(id: number): Promise<PostModel> {
    const result = await api.get(`${endpoint}/${id}`);
    return result.data;
}

export function addPost(data: any): any {
    return api.post(endpoint, data);
}

export function updatePost(data: any): any {
    return api.patch(`${endpoint}/${data.id}`, data);
}