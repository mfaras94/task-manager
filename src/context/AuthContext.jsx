import { createContext, useContext, useState } from "react";
import { login, register } from "../services/authService";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const [isLoading, setIsLoading] = useState(false);
  

  const handleLogin = async (username, password) => {
    setIsLoading(true)
    try {
      const loggedInUser = await login(username, password);
      
      setUser(loggedInUser);
 
      sessionStorage.setItem("user", JSON.stringify(loggedInUser));

    } catch (error) {
      console.log(error.message);
    } finally{
      setIsLoading(false)
    }
  };

  const handleLogOut = () => {
    setIsLoading(true)
    try {
      setUser(null);
      toast.success('You are Logout.')
      sessionStorage.removeItem("user");
    } catch (error) {
      console.log(error.message);
    } finally{
      setIsLoading(false)
    }


  };

  const handleRegister = async (username, password,email) => {
    setIsLoading(true)
    try {
      await register(username, password,email)
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsLoading(false)
    }

  }




  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogOut , handleRegister, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
