import { useState, useEffect } from 'react'
//subcomponentes
import ListTodo from '../../components/todos/ListTodo'
import FormTodo 
    from '../../components/todos/FormTodo'
import type { Priority, Todo } 
    from '../../interfaces/todos/form'
import { consultarTodosAxios } 
    from '../../services/TodoService'
import { crearTodoAxios } from '../../services/TodoService';

const TodoPage = () => {

    const [listaTodo, setListaTodo] =
                useState<Todo[]>([])

    useEffect(()=>{
        const consultar = async() => {
        //llame al servicio para traer datos
        const datos = await consultarTodosAxios()
        // ocargar el estado con los datos traidos
        setListaTodo(datos)
    }
        consultar()

    },[])

  
  //crear funcion para añadir 
  //nueva tarea a listaTodo
  //pero aislada
  //Necesita los atributos de la nueva
  //tarea como parametros
  const addToDo = async ( titulo: string , 
                    prioridad: Priority ) => {
      //nueva tarea                
      const Tarea: Todo = {
          //UUID: tipo de dato ID unico y Universal
           id: crypto.randomUUID(),
           titulo: titulo,
           prioridad: prioridad,
           completada: false
      }
      //poner la nueva tarea
      //en la lista
      const nuevaData = await crearTodoAxios(Tarea) 
      setListaTodo((prev)=>[nuevaData, ...prev])
      
  }


  
  return (
    <>
    
        <FormTodo addToDo={addToDo} />

        <ListTodo TodoList={listaTodo} />

    </>
    
  )
}


export default TodoPage
