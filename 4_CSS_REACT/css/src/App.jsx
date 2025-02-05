import { useState } from 'react'
import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)
  const n = 15
  const [name] = useState("Jason")
  const redTitle = false



  return (
 
      <div>
        {/*CSS Global*/}
       <h1>React com CSS</h1>
        {/*CSS de componente*/}
       <MyComponents />
       <p>Este parágrafo é do App.jsx</p>
        {/*CSS de componente*/}
        <p style={{color: 'blueviolet', padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
        {/*CSS inline dinâmico*/}
        <h2 style={n < 10 ? ({color: 'purple'}) : ({color: "yellow"}
        ) }>CSS dinâmico</h2>
        <h2 style={n > 10 ? ({color: 'purple'}) : ({color: "yellow"}
        ) }>CSS dinâmico</h2>
        <h2 style={name === "Jason"  ? ({color: 'green', backgroundColor: 'black'}) : null }>Teste nome</h2>
       {/*CSS inline dinâmico*/}
       <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
       {/*CSS Modules*/}
       <Title />


      </div>
   

  )
}

export default App
