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
  isChoosed: boolean;
  setChoose: Dispatch<SetStateAction<boolean>>;
}

const optionFromAdditionalBase = createContext<createContextProps>({
  isOption: "",
  setOption: () => {},
  isChoosed: false,
  setChoose: () => {},
});

export const OptionFromAdditionalBaseProvider: React.FC<propsOfComp> = ({
  children,
}) => {
  const [isOption, setOption] = useState("ობიექტების რეესტრი");
  const [isChoosed, setChoose] = useState(false);
  useEffect(() => {}, [isOption]);

  return (
    <optionFromAdditionalBase.Provider
      value={{ isOption, setOption, isChoosed, setChoose }}
    >
      {children}
    </optionFromAdditionalBase.Provider>
  );
};

export const useAdditionalOption = () => useContext(optionFromAdditionalBase);
