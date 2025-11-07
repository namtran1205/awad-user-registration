import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type LoginForm = { email: string; password: string };

function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting}, setError } = useForm<LoginForm>({
        defaultValues: { email: '', password: '' },
    });
    const navigate = useNavigate();

    const onSubmit = (data: LoginForm) => {
        if (data.email && data.password) {
            alert(`Logged in with email: ${data.email}`);
            navigate('/');
        } else {
            setError('root', { message: "Invalid email or password" });
        }
    }

    return (
        <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="Enter your email"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block text-sm mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="••••••••"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
                >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    )
}

export default Login;