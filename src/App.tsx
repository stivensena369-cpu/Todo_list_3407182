import {useState} from 'react'
import type {ChangeEvent} from 'react'
import type { TodoForm, Todo } from './interfaces/Form'

const App = () => {

  //datos internos del copnente
  //se enganchar (hook) la variable
  //contador a el componente
  //useState: hook que permite
  //crear un ESTADO( variable reactiva )

  const[contador , setcontador] 
              = useState<number>(10)

  //estado para el formulario
  const [formulario,setFormulario]=
                    useState<TodoForm>({
                        Titulo: '',
                        Prioridad: 'Baja'
                    })
  const[ListaTodo, setListaTodo] 
                = useState<Todo[]>([])


  
  //funcion para incrementar la variable
  const incrementar=() => {
    //funcion del estado
    //para modificar o asignar valor
    //al estado
    //prev: tomar el dato anterior
    //      el estado
    setcontador((prev)=> ( prev + 1))
  }

//Funcion para tratar el form
  const inputChage=(event: ChangeEvent<HTMLInputElement> |ChangeEvent<HTMLSelectElement>)=>{
        console.log(event.target.value)
        //separar nombre del control y valor ,M K
        //en dos variables
        const { name, value } = event.target
        console.log(`${name} -${value}`)
        
        
        //asignar los valores del forulario 
        //al estado:
        //operador spread: separar un objeto (form )
        setFormulario({
            ...formulario, 
            [name] : value
        })
   }

//function para trabajar el submit
const envioForm=(event:any)=>{
    event.preventDefault()

    //establecer el atributo: completada
    // a la tarea del formulario
    const Tarea: Todo = {
        ...formulario,
        completada: false
    }

    //spread: separar cada TODO en el
    //arreglo,
    //volverlos a unir en otro arreglo
    //pero con el nuevo TODO
    setListaTodo([...ListaTodo , Tarea])
}


  return (
    <>
    <div>Mis quehaceres</div>
    <p>{contador}</p>
    <button onClick={incrementar}>incrementar contador</button>
     <button onClick={() => setcontador((prev) => prev - 1)}>decrementar contador</button>
     <section>

        <h2> registro de nueva tarea </h2>
        <form onSubmit={envioForm}>
          {/* un div por cada control del form*/}
          <div>
              {/* cada control tendra un un label y un input*/}
              <label>Titulo</label>
              <input
                     type="text"
                     id="Titulo"
                     placeholder="p.ej revisar git hub"
                     name="Titulo"
                     onChange={ inputChage }
              />

          </div>
          <div>

              <label htmlFor='prioridad' >prioridad:</label>
              <select
                  id="prioridad"
                  name="prioridad"         
                  onChange={ inputChage }
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
          </div>
          <div>
            <button type="submit">
                Crear ToDo
            </button>
          </div>
        </form>


     </section>
    </>
  )
}


export default App