import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { handleRegister } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const onSubmit = (e) => {
    e.preventDefault();
    if(!emailRegex.test(email)){
      console.log(emailRegex.test(email))
      toast.warning("Please enter a valid email address.");
    }else{
      handleRegister(username, password, email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email" 
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <Link
          to="/login"
          className="block text-sm font-medium text-blue-600 text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
