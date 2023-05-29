import api from "@api";

const endpoint = "/categories";

export interface CategoryModel {
    id: number;
    name: string;
    posts: any[];
}

export async function fetchAllCategories(): Promise<CategoryModel[]> {
    const result = await api.get(endpoint)
    return result.data;
}

export function fetchCategory(id: number) {
    return api.get(`${endpoint}/${id}`);
}

export function addCategory(data: any): any {
    return api.post(endpoint, data);
}

export function updateCategory(data: any): any {
    return api.patch(`${endpoint}/${data.id}`, data);
}