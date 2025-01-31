import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProviders";
import Layout from "./components/Layout"
import Login from "./components/Login";


function App() {
  const [authUser, setAuthUser] = useAuth();
 
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="" element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route
            path="/about"
            element={authUser ? <About /> : <Navigate to="/signup" />}
          />
          <Route
            path="/contact"
            element={authUser ? <Contact /> : <Navigate to="/signup" />}
          />
         
          <Route path="/signup" element={<Signup />} />
          
        
          </Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
