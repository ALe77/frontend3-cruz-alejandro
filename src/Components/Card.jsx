import React, { useState } from "react";

const Card = ({estudiante, setEstudiante}) => {
  const [error, setError] = useState('');
  const [correcto, setCorrecto] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
/*    if ((estudiante.nombre.length<3) || (nombre.startsWith(' '))){
      setError('Ingrese correctamente el nombre');
      return;
    }*/
    if ((estudiante.comida.length<6) || (estudiante.nombre.length<3) || (estudiante.nombre.startsWith(' '))){
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    setError('');

    setCorrecto(true);
    
  };

  return (
    <div>
      {correcto ? (
        <p>Hola {estudiante.nombre} tu comida favorita es {estudiante.comida}</p>
      ) : (
            <>
              {error && <p>{error}</p>}
              <form onSubmit={validarDatos}>  
                <div>
                    <label >Nombre del estudiante: </label>
                    <input type="text" onChange={(e) => setEstudiante({...estudiante, nombre: e.target.value})}/>
                </div>  
                <div>
                    <label >Comida favorita: </label>
                    <input type="text" onChange={(e) => setEstudiante((prevEstudiante) => ({...prevEstudiante, comida: e.target.value}))}/>
                </div> 
                <button type="submit">Enviar</button>
              </form>
            </>
          )
      }
    </div>
  )
};


export default Card;