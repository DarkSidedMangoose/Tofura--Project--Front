import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

interface UserPass {
  username: string;
  password: string;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  UserPass: UserPass,
  setUserPass: React.Dispatch<React.SetStateAction<UserPass>>
) => {
  const { name, value } = e.target;
  setUserPass({ ...UserPass, [name]: value });
};

// Authentication Service
const authenticateUser = async (userPass: UserPass): Promise<any> => {
  const response = await axios.post(`${apiUrl}/auth/login`, userPass, {
    withCredentials: true,
  });
  return response.data;
};

// Handle Submit Refactor
export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  navigate: ReturnType<typeof useNavigate>,
  userPass: UserPass
) => {
  e.preventDefault(); // Ensure this happens first

  try {
    const userData = await authenticateUser(userPass);
    console.log("Authentication successful:", userData);

    // const connection = await initializeSignalRConnection();
    // setSignalRConnection(connection);

    navigate("/main");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", (error as Error).message);
    }
  }
};
