import './App.css';
import Logo from '../src/images/logo.png'
import Boton from './components/boton';
import Contador from './components/Contador';
import '../src/stylesheets/Boton.css'
import '../src/stylesheets/Contador.css'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={Logo} alt='Logo de frecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
