import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // <-- Loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      setLoading(true); // Start loading
      const response = await axios.post(
        "https://project-book-sphere-backend.vercel.app/user/signup",
        userInfo,
        {
          withCredentials: true,
        }
      );

      if (response.data) {
        toast.success("Signup Successfully!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message);
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-black mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border rounded-md dark:text-black"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
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

          {/* Submit */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
              } text-white px-4 py-2 rounded duration-300`}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
            <p className="text-black">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
