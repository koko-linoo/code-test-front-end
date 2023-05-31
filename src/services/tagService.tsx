import api from "@api";
import { PaginatedResult } from "./postService";

const endpoint = "/tags";

export interface TagModel {
    id: number;
    name: string;
}

export async function fetchAllTags(params?: any): Promise<PaginatedResult<TagModel>> {
    const result = await api.get(endpoint, { params });
    return result.data;
}

export async function fetchTag(id: string | undefined) {
    return api.get(`${endpoint}/${id}`).catch(() => null)
}

export async function addTag(data: any): Promise<TagModel> {
    return await api.post(endpoint, data);
}

export async function updateTag({ id, ...data }: any): Promise<TagModel> {
    return await api.patch(`${endpoint}/${id}`, data);
}

export async function deleteTag(id: number): Promise<any> {
    return api.delete(`${endpoint}/${id}`);
}