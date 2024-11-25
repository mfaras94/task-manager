import { createContext, useContext, useState } from "react";
import { login, register } from "../services/authService";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  


  const handleLogin = async (username, password) => {
    setIsLoading(true)
    try {
      const loggedInUser = await login(username, password);
      
      setUser(loggedInUser);
      // loaclStorage for user keep signed in....
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setIsLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = () => {
    setIsLoading(true)
    try {
      setUser(null);
      toast.success('You are Logout.')
      localStorage.removeItem("user");
      setIsLoading(false)
    } catch (error) {
      console.log(error.message);
    }


  };

  const handleRegister = async (username, password,email) => {
    setIsLoading(true)
    try {
      await register(username, password,email)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error.message);
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
