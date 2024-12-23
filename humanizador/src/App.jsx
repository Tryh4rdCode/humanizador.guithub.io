
import Titulo from './Titulo';

function App(){
  var nombre = 'Mundo';
    if(nombre){
      return <p>Hola {nombre}</p>
    }
  return <p>Hola {Desconocido}</p>
}

export default App; 