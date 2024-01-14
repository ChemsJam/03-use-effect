import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);

    const [cargando, setcargando] = useState(true);
    const [errores, setErrores] = useState("");
    // metodo basico para llenar el estado
/*
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in"
                , "first_name": "Tobias"
                , "last_name": "Funke"
                , "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10, "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://reqres.in/img/faces/12-image.jpg"
            }
        ])
    }
    */
    const getUsuariosAjaxPrms = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);
            }
            )
            .catch(error => {
                console.log(error);
            });
    }



    const getUsuariosAjaxAW = () => {

        setTimeout(async() => {
            try{
                const peticion = await fetch("https://reqres.in/api/users?page=2");
            const {data} = await peticion.json();
    
            setUsuarios(data);
            setcargando(false);
            }catch(error){
                console.log(error.message);
                setErrores(error.message);
            }
        },1000)
        
    }      

    useEffect(() => {
        //getUsuariosEstaticos()
        getUsuariosAjaxAW();
    }, [])
    
    if(errores !== ""){
        return(
            <div className='cargando'>
                <h1>ha ocurrido un error al intentar cargar...</h1>
                <h3>{errores}</h3>    
            </div>
        );

    }else if(cargando == true){
        // Cuando todo está cargando
        return(
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    }else if(cargando == false && errores===""){
        //Cuando todo sale bien
    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            {
                usuarios.map(usuario => {
                    console.log(usuario)
                    return(
                        <li key={usuario.id}>
                        <img src={usuario.avatar} width="40"/> 
                        &nbsp;
                        &nbsp;   
                        {usuario.first_name} {usuario.last_name}

                        </li>
                    );
                    })
            }
        </div>
    )
}
    }

    
