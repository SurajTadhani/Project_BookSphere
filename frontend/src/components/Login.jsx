import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProviders";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://project-book-sphere-backend.vercel.app/user/login",
        userInfo,
        { withCredentials: true }
      );

      if (response.data) {
        toast.success("Login Successfully!");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.userToken);
        setAuthUser(response.data.user);
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-10 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none pr-11 transition-all"
              {...register("password", { required: true })}
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg text-white font-semibold tracking-wide shadow-md transition-all duration-300 ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-medium hover:underline">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
