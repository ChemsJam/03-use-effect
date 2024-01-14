import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebaComponent = () => {
  
    const [usuario, setUsuario] = useState("Johan Alfaro")
    const [fecha, setFecha] = useState("21-06-2021")
    const [contador, setContador] = useState(0);

    const modUser = e =>{
        setUsuario(e.target.value)

    }

    const changeDate = e => {
        e.preventDefault();
        setFecha(Date.now())
    }

    //Solo se ejecuta una vez...
    useEffect(()=>{
        console.log("Has cargado el componente o haz cambiado un estado")
    }, [fecha])

    useEffect(()=>{
        console.log("Has modificado el usuario")
        
        setContador(contador +  1)
        console.log("Modificaste un usuario: "+contador)
    }, [usuario])

    return (
    <div>
        <h1>Efecto - Hook useEffect</h1>
        
        <form>
            
        <strong className={ contador <= 10 ? "label label-green" : "label"}>{usuario}</strong>
        <strong>{fecha} </strong>
        <input type='text' 
               onChange={modUser}
               placeholder='Cambia el nombre' />

        <button onClick={changeDate}>Cambiar fecha</button>
        </form>

        { usuario == "Tavito" && <AvisoComponent/>}
    </div>
  )
}
