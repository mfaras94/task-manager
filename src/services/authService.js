import axios from "axios";
import { toast } from "react-toastify";

export const getUsers = async () => {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Something went Wrong!");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.get(
      `/api/users?username=${username}&password=${password}`
    );

    if (response.status === 200) {
      toast.success("Welcome to Task Manager.");
      return response;
    } else {
      toast.error("Invalid credentials");
      throw new Error("Invalid credentials");
    }


  } catch (error) {
    throw new Error(error.message);
  }
};

export const register = async (username, password, email) => {
  try {
    const allUsers = await getUsers();
    const userNameExist = allUsers.some((user) => user.username === username);
    const emailExist = allUsers.some((user) => user.email === email);
    const id = allUsers.length > 0 ? parseInt(allUsers.pop().id) + 1 : 1;

    if (!userNameExist && !emailExist) {
      await axios.post(`/api/users`, {
        id,
        username,
        password,
        email,
      });
      toast.success("New User Added.");
    } else {
      toast.error(
        `${userNameExist ? `${username}` : ""} ${
          emailExist ? `${email}` : ""
        } exist try another one.`
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};