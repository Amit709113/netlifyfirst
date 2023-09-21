import './App.css'
import {BrowserRouter} from "react-router-dom"
const App=()=> {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<h1>shared layout</h1>}>
              <Route path="/about" element={<h2>about</h2>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
