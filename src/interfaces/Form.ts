//1. Definir con type los tipos
//de prioridad

export type Priority = 'Alta' | 'Media' | 'Baja'

//2. Definir la estructura
// del formulario

export interface TodoForm {
    Titulo: string
    Prioridad: Priority
}

//3. Definir la estructura
// de cada todo
export interface Todo{
    Titulo: string
    Prioridad: Priority
    completada: boolean
}