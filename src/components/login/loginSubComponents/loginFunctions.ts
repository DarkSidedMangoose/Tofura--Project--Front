import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

interface UserPass {
  username: string;
  password: string;
}

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  UserPass: UserPass,
  setUserPass: React.Dispatch<React.SetStateAction<UserPass>>
) => {
  const { name, value } = e.target;
  setUserPass({ ...UserPass, [name]: value });
};

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  navigate: ReturnType<typeof useNavigate>,
  userPass: UserPass
) => {
  const verifyAuthentification = async (userPass: UserPass) => {
    try {
      const response = await axios.post(
        "https://localhost:7205/api/auth/login",
        userPass,
        {
          withCredentials: true, // Ensures cookies are included
        }
      );
      console.log("authentification succesfull:", response.data);
      navigate("/main");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // If error is an AxiosError
        console.error("Axios Error:", error.response?.data || error.message);
      } else {
        // For non-Axios errors
        console.error("Unexpected Error:", (error as Error).message);
      }
    }
  };
  verifyAuthentification(userPass);

  e.preventDefault();
};
