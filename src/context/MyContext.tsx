import React from "react";

type Product = {
  id: number;
  name: string;
  step: number;
  price: number;
};

type MyContextData = {

  step: number;
  setStep: (step: number) => void;
};

const MyContext = React.createContext<MyContextData>({
  step: 0,
  

  setStep: () => {},
});

export default MyContext;
