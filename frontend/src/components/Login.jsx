import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
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
      const response = await axios.post(
        "https://project-book-sphere-backend.vercel.app/user/login",
        userInfo,
        {
          withCredentials: true,
        }
      );

      if (response.data) {
        toast.success("Login Successfully!");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.userToken);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-black mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-md dark:text-black"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-md dark:text-black"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          {/* Submit & Signup Link */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 duration-300"
            >
              Login
            </button>
            <p className="text-black">
              Not registered?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
