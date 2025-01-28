import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";

interface propsOfComp {
  children: ReactNode;
}

interface createContextProps {
  isOption: string;
  setOption: Dispatch<SetStateAction<string>>;
}

const optionFromAdditionalBase = createContext<createContextProps>({
  isOption: "",
  setOption: () => {},
});

export const OptionFromAdditionalBaseProvider: React.FC<propsOfComp> = ({
  children,
}) => {
  const [isOption, setOption] = useState("");
  useEffect(() => {
    console.log(`${isOption} optioned`);
  }, [isOption]);

  return (
    <optionFromAdditionalBase.Provider value={{ isOption, setOption }}>
      {children}
    </optionFromAdditionalBase.Provider>
  );
};

export const useAdditionalOption = () => useContext(optionFromAdditionalBase);
