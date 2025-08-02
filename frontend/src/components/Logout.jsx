
import { useAuth } from "../context/AuthProviders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      
    

      await axios.get("https://project-book-sphere-backend.vercel.app/user/logout", {
        withCredentials: true 
      });

 
      localStorage.removeItem("Users");
      localStorage.removeItem("userToken");


      setAuthUser(null);

   
      toast.success("Logout Successfully!");

      setTimeout(() => {
        navigate("/login");
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
