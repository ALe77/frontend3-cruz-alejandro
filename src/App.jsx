import Card from "./Components/Card";
import { useState } from 'react'


function App() {
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    comida: ''
  })

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card estudiante={estudiante} setEstudiante={setEstudiante}/>
    </div>
  );
}


export default App;
