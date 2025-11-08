"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegister } from "../hooks/useRegister"
import { useEffect } from "react"
import { ArrowRight, CheckCircle, AlertCircle, Lock, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 6 characters" }),
})

type FormValues = z.infer<typeof schema>

function Register() {
  const { mutate, isPending, isSuccess, isError, error, data } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  })

  useEffect(() => {
    if (isSuccess) reset()
  }, [isSuccess, reset])

  const onSubmit = (values: FormValues) => {
    mutate(values)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 md:py-10">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-1 text-balance">Create Account</h1>
          <p className="text-gray-600">Join us and start managing your profile securely</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Success Message */}
          {isSuccess && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-green-900">{data?.message}</p>
                <p className="text-green-800 text-xs mt-1">{data?.user.email}</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {isError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-red-900">{error?.response?.data?.message ?? "Registration failed"}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                <Mail className="w-4 h-4 inline mr-2 text-blue-600" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:border-blue-600 ${
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                <Lock className="w-4 h-4 inline mr-2 text-blue-600" />
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:border-blue-600 ${
                  errors.password ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
                {...register("password")}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
              />
              {errors.password && (
                <p id="password-error" className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? "Creating account..." : "Create Account"}
              {!isPending && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link
            to="/login"
            className="w-full inline-flex items-center justify-center px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Sign In Instead
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
