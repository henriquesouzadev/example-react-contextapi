import React, { useContext } from 'react'
import { FirstContext } from '../../context/FirstContext'

export const UserThree = () => {
   const { user, setUser } = useContext(FirstContext)

   return (
      <>
         <div>Usuário ativo: {user}</div>
         <button onClick={() => setUser("Flavia")}>Selecionar Flavia</button>
         <hr />
      </>
   )
}
