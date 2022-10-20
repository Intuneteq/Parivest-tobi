import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [slugParam, setSlugParam] = useState("");
  const [status, setStatus] = useState("Pending");

  return (
    <AppContext.Provider
      value={{
        slugParam,
        setSlugParam,
        status,
        setStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppProvider() {
    return useContext(AppContext);
  }
