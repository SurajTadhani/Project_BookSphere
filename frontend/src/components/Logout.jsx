import React from "react";
import { useAuth } from "../context/AuthProviders";
import toast from "react-hot-toast";


export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout =  () =>{
    try {
      setAuthUser({
        ...authUser,
        user : null
      })
      localStorage.removeItem("Users")
      toast.success("Logout Successfully!");
      
          setTimeout(() => {
            window.location.reload();
          }, 1000);
     
    } catch (error) {
      toast.error("Error : ", error);
      setTimeout(() => {}, 2000);
    }
  }
  return (
    <>
      <button onClick={handleLogout} className="sm:px-3 sm:py-2 px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">
        Logout
      </button>
    </>
  );
}
