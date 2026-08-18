// 1. IMPORTACIONES: Traemos las herramientas y piezas que necesitamos de React.
import { useState } from 'react' // Memoria para guardar datos que cambian y actualizan la pantalla.
import type { ChangeEvent } from 'react' // Herramienta para saber cuando escribes en un input.
import type { TodoForm, Todo } from './interfaces/Form' // Los moldes que definen la forma de nuestros datos.
import { LuSquareX } from "react-icons/lu"; // Icono de la X para las tareas no hechas.

// IMPORTANTE PARA EL MÉTODO 3: Importamos React para usar el tipado de estilos.
import React from 'react';

// IMPORTANTE PARA EL MÉTODO 1: Importamos el archivo App.css para los estilos globales y colores pastel.
import './App.css';

const App = () => {

  // ==========================================
  // MÉTODO 3: USAR React.CSSProperties
  // ==========================================
  // Creamos objetos de estilos ordenados en TypeScript con colores pastel aplicados a nuestras tarjetas.
  const estiloTarjetaPrincipal: React.CSSProperties = {
    backgroundColor: '#ffffff', // Fondo blanco limpio para la tarjeta
    padding: '2rem',            // Espacio interno cómodo
    borderRadius: '20px',       // Esquinas súper redondeadas estilo pastel moderno
    boxShadow: '0 8px 25px rgba(149, 157, 165, 0.15)', // Sombra suave y ligera para la tarjeta
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '2rem'        // Espacio extra abajo para que la sombra de la tabla no se pegue o corte
  };


  // 2. ESTADOS: Las memorias de nuestra aplicación.
  
  // Memoria para guardar lo que vas escribiendo en el formulario paso a paso.
  const [formulario, setFormulario] = useState<TodoForm>({
    titulo: '',
    prioridad: 'Baja'
  })

  // Memoria para guardar la lista completa de todas las tareas creadas.
  const [ListaTodo, setListaTodo] = useState<Todo[]>([])


  // 3. LAS ACCIONES (FUNCIONES)

  // Función que se activa cada vez que escribes una letra o cambias la prioridad.
  const inputChage = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormulario({
      ...formulario, 
      [name] : value
    })
  }

  // Función que se activa cuando le das al botón de crear tarea.
  const envioForm = (event: any) => {
    event.preventDefault() // Evita que la página se recargue sola por defecto.

    // Creamos la tarea completa uniendo lo que escribiste, un ID único y poniendo completada en falso.
    const Tarea: Todo = {
      id: crypto.randomUUID(), // Inventa un código de letras y números único.
      ...formulario,
      completada: false
    }

    // Metemos la nueva tarea a la lista sin borrar las anteriores.
    setListaTodo([...ListaTodo, Tarea])

    // Limpiamos el formulario dejándolo vacío para la próxima tarea.
    setFormulario({
      titulo: '',
      prioridad: 'Baja',
    })
  }

  // 4. LO QUE SE MUESTRA EN PANTALLA
  return (
    // Aquí se aplica el MÉTODO 1 (Estilos globales desde el archivo App.css)
    <div className="main-app-container"> 

      {/* SECCIÓN DEL FORMULARIO */}
      {/* Aquí aplicamos el MÉTODO 3: Usamos el objeto de estilos React.CSSProperties para la tarjeta */}
      <section style={estiloTarjetaPrincipal}>
        
        {/* Estilos en línea directos (MÉTODO 2) para el título en tono pastel */}
        <h2 style={{ textAlign: 'center', color: '#6c5ce7', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.4rem' }}>
          Registro de nueva tarea
        </h2>

        <form onSubmit={envioForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem', color: '#636e72' }}>Título de la tarea</label>
            
            {/* Aquí aplicamos el MÉTODO 2: Estilos en línea directos para la caja de texto */}
            <input
               type="text"
               id="titulo"
               placeholder="Ej. Revisar GitHub"
               name="titulo"
               onChange={inputChage}
               value={formulario.titulo}
               style={{ padding: '12px 14px', borderRadius: '12px', border: '2px solid #dfe6e9', fontSize: '1rem', outline: 'none', backgroundColor: '#fafbfc' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label htmlFor='prioridad' style={{ fontWeight: '600', fontSize: '0.9rem', color: '#636e72' }}>Prioridad:</label>
            
            {/* Aquí aplicamos el MÉTODO 2: Estilos en línea directos para el selector */}
            <select
                id="prioridad"
                name="prioridad"        
                onChange={inputChage}
                value={formulario.prioridad}
                style={{ padding: '12px 14px', borderRadius: '12px', border: '2px solid #dfe6e9', fontSize: '1rem', backgroundColor: '#fafbfc', outline: 'none' }}
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            {/* Aquí aplicamos el MÉTODO 2: Estilos en línea directos para el botón principal con color pastel verde menta y sombra box-shadow */}
            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#55efc4',
                color: '#2d3436',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(85, 239, 196, 0.4)'
              }}
            >
                Crear ToDo
            </button>
          </div>

        </form>
      </section>

      {/* SECCIÓN DE LA TABLA DE TAREAS */}
      {/* Aquí aplicamos el MÉTODO 3: Reutilizamos el objeto React.CSSProperties de la tarjeta que ya incluye box-shadow y marginBottom */}
      <section style={estiloTarjetaPrincipal}>
          
          {/* Estilos en línea directos (MÉTODO 2) */}
          <h2 style={{ textAlign: 'center', color: '#2d3436', marginTop: 0, marginBottom: '1.2rem', fontSize: '1.4rem' }}>
            Mis tareas guardadas
          </h2>

          <div style={{ overflowX: 'auto' }}>
            {/* Añadimos un ancho mínimo a la tabla para que el ID tenga espacio de sobra y se lea derecho sin amontonarse */}
            <table style={{ width: '100%', minWidth: '500px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f2f6', borderBottom: '2px solid #dfe4ea' }}>
                    <th style={{ padding: '12px', width: '35%' }}>ID único</th>
                    <th style={{ padding: '12px', width: '30%' }}>Título</th>
                    <th style={{ padding: '12px', width: '20%' }}>Prioridad</th>
                    <th style={{ padding: '12px', width: '15%' }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    // Recorremos la lista de tareas para pintarlas una por una en la tabla
                    ListaTodo.map((todo: Todo)=>(
                      <tr key={todo.id} style={{ borderBottom: '1px solid #f1f2f6' }}>
                        {/* Celda del ID corregida: se le da espacio y 'wordBreak' para que baje de línea ordenadamente y se lea perfecto */}
                        <td style={{ padding: '12px', color: '#636e72', fontSize: '0.8rem', wordBreak: 'break-word', lineHeight: '1.3' }}>
                          {todo.id}
                        </td>
                        <td style={{ padding: '12px', fontWeight: '500', color: '#2d3436' }}>{todo.titulo}</td>
                        <td style={{ padding: '12px', color: '#636e72' }}>{todo.prioridad}</td>
                        <td style={{ padding: '12px' }}>
                          { 
                            // Si la tarea está completa muestra "Sí" en verde pastel, si no, muestra "no" con la X roja pastel en línea.
                            (todo.completada) === true? 
                              <span style={{ color: '#00b894', backgroundColor: '#d1f2eb', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem' }}>Sí</span>: 
                              <span style={{ color: '#d63031', backgroundColor: '#fadadd', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                no <LuSquareX />
                              </span>
                          }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
          </div>
      </section>

    </div>
  )
}

export default App // Exportamos el componente para que la app pueda mostrarlo.