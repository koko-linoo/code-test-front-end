import api from "@api";

const endpoint = "/auth";

export function login(formData: any) {
    return api.post(`${endpoint}/login`, formData);
}

export function register(formData: any): any {
    return api.post(`${endpoint}/register`, formData);
}

export function profile(): any {
    return api.get(`${endpoint}/profile`);
}