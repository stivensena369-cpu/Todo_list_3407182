import type { JSX } from "react/jsx-runtime"

//tipos de usuario
export type Rol = 'Admin' | 'Dev'

//interfaces para el formulario

export interface IUserform{
    nombre: string,
    email: string,
    rol: Rol
}

//interface para el usuario
//guardar


export interface IUser{
    map(arg0: (us: IUser) => JSX.Element): import("react").ReactNode
    id: string,
    nombre: string,
    email: string,
    rol: Rol

}
