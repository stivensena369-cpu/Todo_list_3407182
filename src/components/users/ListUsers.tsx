import React from 'react'
import type { IUser } from '../../interfaces/users/IUser'

interface LisUsersProps{

    u:IUser[]
}

const ListUsers = ({u}:LisUsersProps) => {

    

  return (
    <>
     <div>Lista de usuarios</div>
     <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
     </table>

     <tbody>
        {
            u.map((us:IUser)=>(

                <tr>
                    <td>{ us.nombre }</td>
                    <td>{ us.email }</td>
                </tr>
            ))
        }
     </tbody>
    
    </>
   
  )
}

export default ListUsers