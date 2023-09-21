import './App.css'
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom"
const App=()=> {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><h1>shared layout</h1><Outlet /></>}>
              <Route path="/about" element={<h2>about</h2>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
