import api from "@api";
import { PaginatedResult } from "./postService";

const endpoint = "/categories";

export interface CategoryModel {
    id?: number;
    name: string;
    posts?: any[];
}

export async function fetchAllCategories(params?: any): Promise<PaginatedResult<CategoryModel>> {
    const result = await api.get(endpoint, { params: params });
    return result.data;
}

export async function fetchCategory(id: string | undefined) {
    return api.get(`${endpoint}/${id}`).catch(() => null)
}

export async function addCategory(data: any): Promise<CategoryModel> {
    return await api.post(endpoint, data);
}

export async function updateCategory({ id, ...data }: any): Promise<CategoryModel> {
    return await api.patch(`${endpoint}/${id}`, data);
}

export async function deleteCategory(id: number): Promise<any> {
    return api.delete(`${endpoint}/${id}`);
}