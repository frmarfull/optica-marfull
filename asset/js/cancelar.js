let campoRutCancelar

// Eventos
formCancelarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Rut ingresado por el usuario.
    campoRutCancelar = document.getElementById("rutInputCancelar").value;

    let rutBorrar= campoRutCancelar;
    index = arrayDatosDespacho.findIndex(x => x.rut ===rutBorrar)
    if(index !=-1){
        alert("Yes")
        borrarDespacho()
    }
    else{
        alert("Rut no encontrado")
    }
})    
    // formularioBorrar.reset();

    // Se buscan coincidencias del rut.
    /*
    datosUsuario = encuentraRutCancelar(campoRutCancelar);
    if (datosUsuario != false){
        alert("Borrado");
    }
    else {
        alert("No se enuentran coincidencias");
    }
})

// Buscar el rut que se desea cancelar, devuelve Datos-usuario/False.
function encuentraRutCancelar(campoRut){
	let encontrado = false;
    let rutBuscado = campoRut;
    for (i=0;i<arrayDatosDespacho.length;i++){
        if (arrayDatosDespacho[i]["rut"]==rutBuscado){
            encontrado = arrayDatosDespacho[i];
        }
    }
    return encontrado;
}

formDatosModificar.addEventListener('submit', (e)=>{
    e.preventDefault();
    var formDatosModificarUI = document.getElementById("formDatosModificar");
    
    rut = campoRut;
    nombre = formDatosModificarUI[0].value;
    apellido = formDatosModificarUI[1].value;
    region = formDatosModificarUI[2].value;
    calle = formDatosModificarUI[4].value;
    comuna = formDatosModificarUI[3].value;
    departamento = formDatosModificarUI[5].value;

    cod = datosUsuario["cod"];
    desc = datosUsuario["desc"];
    precio = datosUsuario["precio"];

    index = arrayDatosDespacho.findIndex(x => x.rut ===rut);
    if(index !=-1){
        arrayDatosDespacho[index]={rut,nombre,apellido,region,
            comuna,calle,departamento,cod,desc,precio}
            guardarDatos();
        }
    alert("Datos modificados!");
    formModificarRut.reset();
    formDatosModificar.reset();
    formDatosModificar.className = "hide";
    
})*/