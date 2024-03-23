import { useState } from "react";
import MyContext from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [step, setStep] = useState(0);
    return (
      <MyContext.Provider value={{step,setStep}} >
         {children}
      </MyContext.Provider>
    );
  };