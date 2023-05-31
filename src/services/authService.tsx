import api from "@api";

const endpoint = "/auth";

export interface LoginResult {
    accessToken: string;
}

export interface User {
    username: string;
    password: string;
}

export async function login(formData: any): Promise<LoginResult | null> {
    return api.post(`${endpoint}/login`, formData).then(
        response => response?.data
    )
}

export function register(formData: any): any {
    return api.post(`${endpoint}/register`, formData);
}

export async function getProfile(): Promise<Partial<User> | null> {
    return api.get(`${endpoint}/profile`).then(
        response => response?.data
    )
}