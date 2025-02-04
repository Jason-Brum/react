import { useState } from 'react'
import './App.css'
import MyComponents from './components/MyComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div>
        {/*CSS Global*/}
       <h1>React com CSS</h1>
        {/*CSS de componente*/}
       <MyComponents />
       <p>Este parágrafo é do App.jsx</p>
      </div>
   

  )
}

export default App
