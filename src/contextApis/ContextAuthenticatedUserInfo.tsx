import axios from "axios";
import React, { useContext, useEffect } from "react";

interface authenticatedUserInfoProps {
  id: string;
  fullname: string;
  level: number;
}

interface authenticatedUserInfoState {
  authenticatedUserInfo: authenticatedUserInfoProps;
  setAuthenticatedUserInfo: React.Dispatch<
    React.SetStateAction<authenticatedUserInfoProps>
  >;
}

interface children {
  children: React.ReactNode;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const authenticatedUserInfoContext =
  React.createContext<authenticatedUserInfoState>({
    authenticatedUserInfo: {
      id: "",
      fullname: "",
      level: 0,
    },
    setAuthenticatedUserInfo: () => {},
  });

const ContextAuthenticatedUserInfo: React.FC<children> = ({ children }) => {
  const [authenticatedUserInfo, setAuthenticatedUserInfo] =
    React.useState<authenticatedUserInfoProps>({
      id: "",
      fullname: "",
      level: 0,
    });
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/getUserInfo`, {
          withCredentials: true,
        });
        setAuthenticatedUserInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  }, []);

  return (
    <authenticatedUserInfoContext.Provider
      value={{ authenticatedUserInfo, setAuthenticatedUserInfo }}
    >
      {children}
    </authenticatedUserInfoContext.Provider>
  );
};

export default ContextAuthenticatedUserInfo;

export const UseContextAuthenticatedUserInfo = () =>
  useContext(authenticatedUserInfoContext);





