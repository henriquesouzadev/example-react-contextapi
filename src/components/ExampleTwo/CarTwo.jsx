import { useSecondContext } from "../../context/SecondContext";

export default function CarTwo() {
   const { setCar } = useSecondContext(); // Custom Hook
   
   return (
      <>
         <h1>Segundo carro</h1>
         <button onClick={() => setCar("BMW")}>Selecionar BMW</button>
      </>
   );
}