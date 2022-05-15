import { createContext, useContext, useState } from "react";

const SecondContext = createContext();

// Colocando o Provider dentro de um componente
export const SecondContextProvider = ({ children }) => {
   const [car, setCar] = useState("Porsche");

   return (
      <SecondContext.Provider value={{ car, setCar }}>
         {children}
      </SecondContext.Provider>
   );
}

/*
   Colocando o useContext dentro de um Custom Hook para facilitar a utilização
   O useContext só pode ser usado por volta de um Provider
*/
export const useSecondContext = () =>  useContext(SecondContext);