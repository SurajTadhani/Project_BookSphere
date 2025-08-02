import React from "react";
import { useAuth } from "../context/AuthProviders";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear localStorage
      localStorage.removeItem("Users");
      localStorage.removeItem("userToken"); // If you stored token like this

      // Clear context
      setAuthUser(null);

      // Toast and redirect
      toast.success("Logout Successfully!");

      setTimeout(() => {
        window.location.href = "/login"; // or window.location.reload();
      }, 1000);

    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong during logout");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="sm:px-3 sm:py-2 px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer"
    >
      Logout
    </button>
  );
}
