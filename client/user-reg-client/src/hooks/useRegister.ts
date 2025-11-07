import { useMutation } from '@tanstack/react-query';
import { api }  from '../lib/api';

type RegisterInput = {
    email: string;
    password: string;
};

type RegisterSuccess = {
    message: string;
    user: {
        id: string;
        email: string;
        createdAt: string;
    }
};

export function useRegister() {
    return useMutation<RegisterSuccess, any, RegisterInput>({
        mutationFn: async (payload) => {
            const { data } = await api.post('/user/register', payload);
            return data;
        },  
    });
}