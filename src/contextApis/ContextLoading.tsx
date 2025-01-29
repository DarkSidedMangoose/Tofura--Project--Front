import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";

interface children {
  children: ReactNode;
}
interface MainLoadingContextType {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

// Create a context with a default value
const MainLoadingContext = createContext<MainLoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

export const MainLoadingProvider: React.FC<children> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (isLoading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 1400);
    }
  }, [isLoading]);

  return (
    <MainLoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </MainLoadingContext.Provider>
  );
};

// Custom hook to use the MainLoadingContext
export const useMainLoading = () => useContext(MainLoadingContext);
