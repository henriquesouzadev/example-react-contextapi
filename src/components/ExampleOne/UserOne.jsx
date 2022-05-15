import React, { useContext } from 'react'
import { FirstContext } from '../../context/FirstContext'

export const UserOne = () => {
   const { user, setUser } = useContext(FirstContext)

   return (
      <>
         <div>Usuário ativo: { user }</div>
         <button onClick={() => setUser("Maria")}>Selecionar Maria</button>
         <hr />
      </>
   )
}
