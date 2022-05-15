import { useSecondContext } from "../../context/SecondContext";

import CarOne from "./CarOne";
import CarTwo from "./CarTwo";

/*
   Esse exemplo mostra o uso da Context API com o uso do Custom Hook
   A lógica e o Context Provider ficam dentro do arquivo de Context
*/
export const ExampleTwo = () => {
   const { car } = useSecondContext();

   return (
      <div className="box">
         <h1>Segundo Exemplo</h1>
         <p>Usando Context API com um Custom Hook</p>
         
         <p>Carro selecionado: { car }</p>
         
         <CarOne />
         <CarTwo /> 
      </div>
   );
}