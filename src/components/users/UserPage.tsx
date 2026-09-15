import {useState,
        useEffect} from 'react'
import ListUsers from './ListUsers'
import { FormUser } from './FormUser'
import type { IUser } from '../../interfaces/users/IUser'
import { getAllUsers } from '../../services/UserService'

const UserPage = () => {

    //crear estado de listado de usuarios

    const [listaUsers,
           setlistaUsers
          ] = useState<IUser[]>([])


          useEffect(()=>{
            const consultar = async() => {
            //llame al servicio para traer datos
            const datos = await getAllUsers ()
            //  ocargar el estado con los datos traidos
            console.log(datos)
            setlistaUsers(datos)
         }
            consultar()
        },[])



  return (
    <>

        <FormUser />
        <ListUsers u={listaUsers} />  
    
    </>
   
  )
  
}

export default UserPage

