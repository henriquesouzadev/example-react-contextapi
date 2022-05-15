import React, { useContext } from 'react'
import { FirstContext } from '../../context/FirstContext'

export const UserTwo = () => {
   const { user, setUser } = useContext(FirstContext)

   return (
      <>
         <div>Usuário ativo: {user}</div>
         <button onClick={() => setUser("Pedro")}>Selecionar Pedro</button>
         <hr />
      </>
   )
}
