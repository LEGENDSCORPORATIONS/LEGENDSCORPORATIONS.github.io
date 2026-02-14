import { useState } from 'react'
import legendsLogo from '/legendscorporation.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
            <a><img src={legendsLogo} className="logo" alt="Legendscorporation logo"></img></a>
            
            <ul>
              <li><a href="inicio">Inicio</a></li>
              <li><a href="sobre-mi">Sobre mi</a></li>
              <li><a href="intereses">Intereses</a></li>
            </ul>
        </nav>
      </div>
      <h1>LEGENDSCORPORATIONS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hola mi nombre es Juan Santiago Blanco Herrera, soy estudiantes de ingenieria de sistema de la Universidad Cooperativa de Colombia, y por ahora estoy practicando y esta es mi primera pagina web actualizacion 2.0
        </p>
      </div>
      <p className="read-the-docs">
        Mas adelante se actualizaran mas cosas
      </p>
    </>
  )
}

export default App
