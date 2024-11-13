import { createContext, useContext, useState } from "react";
import { login, register } from "../services/authService";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const handleLogin = async (username, password) => {
    try {
      const loggedInUser = await login(username, password);
      
      setUser(loggedInUser);
      // loaclStorage for user keep signed in....
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = () => {
    setUser(null);
    toast.success('You are Logout.')
    localStorage.removeItem("user");

  };

  const handleRegister = async (username, password,email) => {
    await register(username, password,email)
  }




  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogOut , handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
