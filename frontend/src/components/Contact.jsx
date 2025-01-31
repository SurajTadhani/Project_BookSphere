import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userContact = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://project-book-sphere-backend.vercel.app/api/contact", userContact,{
        withCredentials: true,  // Remove if your backend does not use authentication
    });
      console.log(data);

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("There was an error sending the message!", error);
      toast.error("Error: " + error);
    }
  };

  return (
    <div className="flex justify-center py-16 px-4 bg-white dark:bg-gray-900">  
      <form
        className="space-y-8 lg:p-10 p-4 border my-10 rounded-lg w-full max-w-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="font-bold text-xl text-center pb-5">Contact Us</h4>
        <div className="mt-4 space-y-2">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-700 dark:text-red-400">
              This field is required
            </span>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-700 dark:text-red-400">
              This field is required
            </span>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            cols="45"
            rows="3"
            placeholder="Enter Your Message"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-700 dark:text-red-400">
              This field is required
            </span>
          )}
        </div>
        <button class="button dark:text-white dark:border">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
