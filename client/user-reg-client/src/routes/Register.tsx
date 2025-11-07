import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister } from '../hooks/useRegister';
import { useEffect } from 'react';

const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 6 characters' }),
});

type FormValues = z.infer<typeof schema>;

function Register() {
    const { mutate, isPending, isSuccess, isError, error, data } = useRegister();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    useEffect(() => {
        if (isSuccess) reset();
    }, [isSuccess, reset]);

    const onSubmit = (values: FormValues) => {
        mutate(values);
    }
    return (
        <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Create an Account</h2>
            {isSuccess && (
                <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm">
                ✅ {data?.message} — <span className="font-medium">{data?.user.email}</span>
                </div>
            )}

            {isError && (
                <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm">
                ❌ {error?.response?.data?.message ?? 'Registration failed'}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                    <label className="block text-sm mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter your email"
                        {...register('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                    />
                    {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">
                            {errors.email.message
                            }
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-sm mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="•••••••"
                        {...register('password')}
                        aria-invalid={!!errors.password}
                        aria-describedby="password-error"
                    />
                    {errors.password && (
                        <p id="password-error" className="mt-1 text-sm text-red-600">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
                >
                    {isPending ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register;