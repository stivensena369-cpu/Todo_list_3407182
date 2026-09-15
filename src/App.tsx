
import {Routes,
        Route,
        NavLink,
       } from 
    'react-router-dom'
import TodoPage from './pages/todo/TodoPage'
import UserPage from './components/users/UserPage'



const App = () => {
    
  
    return (<>
              <nav style={{ display:"flex",
                    gap: "10px",
                    paddingBottom: "30px",
                    paddingTop: "30px",
                    backgroundColor: "aqua"
                  }}> 
                <NavLink to="/todos">
                    Tareas
                </NavLink>
                <NavLink to="/users">
                  User
                </NavLink>
              </nav>
              <hr/>
              <main>
                <Routes>
                  <Route 
                    path='/todos'
                    element={<TodoPage />}
                  />
                  <Route 
                    path='/users'
                    element={<UserPage/>}
                  />
                </Routes>
              </main>
    </>)
}


export default App