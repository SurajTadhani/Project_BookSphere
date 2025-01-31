import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    await axios
      .post("https://project-book-sphere-backend.vercel.app/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Login Successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(response.data.user));
          }, 1000);
          navigate("/");
        }
      })
      .catch((error) => {
      
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
          setTimeout(() => {},2000)
        }
      });
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          {/* Email */}
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg dark:text-black">Login</h3>
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Email</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 rounded-md outline-none dark:text-black dark:border"
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
                  className="w-80 px-3 py-1 rounded-md outline-none dark:text-black dark:border"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-around mt-6">
                  <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-500">
                    Login
                  </button>
                  <p className="dark:text-black">
                    Not registered?{" "}
                    <Link
                      to="/signup"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Signup
                    </Link>{" "}
                  </p>
                    {/* <Signup /> */}
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
