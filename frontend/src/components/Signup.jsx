import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";



function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
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
    await axios
      .post("http://localhost:5200/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Signup Successfully!");
          
          navigate(from, {replace : true});
        }
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="" className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg dark:text-black">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-96 px-3 py-1 rounded-md outline-none dark:text-black dark:border"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-96 px-3 py-1 rounded-md outline-none dark:text-black dark:border"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-96 px-3 py-1 rounded-md outline-none dark:text-black dark:border"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-around mt-6">
                  <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-500">
                    Signup
                  </button>
                  <p className="text-xl dark:text-black">
                    Have account?{" "}
                    <button
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>{" "}
                    <Login />
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
