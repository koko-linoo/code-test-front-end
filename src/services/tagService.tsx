import api from "@api";

const endpoint = "/tags";

export interface TagModel {
    id: number;
    name: string;
}

export async function fetchAllTags(): Promise<TagModel[]> {
    const result = await api.get(endpoint);
    return result.data;
}

export function fetchTag(id: number) {
    return api.get(`${endpoint}/${id}`);
}

export function addTag(data: any): any {
    return api.post(endpoint, data);
}

export function updateTag(data: any): any {
    return api.patch(`${endpoint}/${data.id}`, data);
}