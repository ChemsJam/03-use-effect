import React, { useEffect } from 'react'

export const AvisoComponent = () => {
  
    useEffect(()=>{

        //Detecta cuando se monta
        alert("El componente está cargado :D")
    
        return() =>{
            alert("Componente desmontado :D")
        }
    }, [])

    

    return (
    <div>
        
        <h1>Hola panita tavo</h1>
        
        <button onClick={e=>{
            alert("Bienvenido panita")
            }}>Mostrar alerta</button>
            
    </div>
  )
}
