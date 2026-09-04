import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'
import Contador from './components/Contador'
import './App.css'

const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>rodo</h1>
      <p>desarrollador</p>
      <ul>javascript, python, c+</ul>

      <Perfil 
      nombre="rodo" 
      rol="Desarrollador" 
      lenguajes={["JavaScript ", "React ", "CSS"]} />

      {peliculas.map((pelicula) => (
        
      <TarjetaPelicula
      titulo={pelicula.titulo}
      año={pelicula.año}
      vista={pelicula.vista}
      />
      ))}

      <Contador
      
      
      
      />
    </>
  )
}

export default App
