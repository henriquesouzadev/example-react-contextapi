import { useState } from 'react'

import { UserOne } from './UserOne'
import { UserTwo } from './UserTwo'
import { UserThree } from './UserThree'

import { FirstContext } from '../../context/FirstContext'

// Esse exemplo mostra o uso da Context API sem o uso do Custom Hook
// A lógica e o Context Provider ficam aqui, dentro do componente pai
export const ExampleOne = () => {  
   const [user, setUser] = useState("João");
   
   return (
      <div className="box">
         <FirstContext.Provider value={{ user, setUser }}>
            <h1>Primeiro Exemplo</h1>
            <p>Usando Context API sem um Custom Hook</p>

            <UserOne />
            <UserTwo />
            <UserThree />
         </FirstContext.Provider>
      </div>
   );
}