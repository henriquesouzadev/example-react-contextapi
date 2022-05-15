import { useSecondContext } from "../../context/SecondContext";

export default function CarOne() {
   const { setCar } = useSecondContext(); // Custom Hook

   return (
      <>
         <h1>Primeiro carro</h1>
         <button onClick={() => setCar("Ferrari")}>Selecionar Ferrari</button>
      </>
   );
}