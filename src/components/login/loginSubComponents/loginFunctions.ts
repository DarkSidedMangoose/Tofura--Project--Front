import React from "react";
import { UserPass } from "./loginInterface";
import { useNavigate } from "react-router-dom";

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
  navigate: ReturnType<typeof useNavigate>
) => {
  e.preventDefault();
  navigate("/main");
};
