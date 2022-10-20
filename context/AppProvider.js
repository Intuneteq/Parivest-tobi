import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [status, setStatus] = useState("Pending");

  return (
    <AppContext.Provider
      value={{
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
