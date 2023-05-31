import { User, login, getProfile } from '@services/authService';
import { create } from 'zustand'


export interface AuthState {
    loading?: boolean;
    user?: Partial<User> | null;
}

const initialState: AuthState = {
    loading: true,
    user: null,
};

export interface AuthStore {
    auth: AuthState;
    initialize: () => void;
    login: (formData: Partial<User>) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    auth: initialState,
    initialize: async () => {
        const response = await getProfile()
            .catch(() => null);

        if (response) {
            set((state: AuthStore) => ({
                auth: {
                    ...state.auth,
                    user: response,
                    loading: false,
                },
            }));
            return;
        }

        set({
            auth: {
                user: null,
                loading: false,
            }
        });
    },
    login: async (formData: Partial<User>) => {
        set((state: AuthStore) => ({
            auth: {
                ...state.auth,
                loading: true,
            }
        }))

        const response = await login(formData);

        if (response) {
            localStorage.setItem('accessToken', response.accessToken!);
        }

        const profile = await getProfile();

        set({
            auth: {
                user: profile,
                loading: false,
            }
        })
    },
    logout: () => {
        localStorage.removeItem('accessToken');

        set({
            auth: {
                user: null,
                loading: false,
            }
        })
    }
}));