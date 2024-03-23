import MyContext from "./MyContext";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    
    return (
      <MyContext.Provider value={{}} >
         {children}
      </MyContext.Provider>
    );
  };