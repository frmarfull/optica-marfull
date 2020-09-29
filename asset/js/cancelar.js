let campoRutCancelar

// Eventos
formCancelarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Rut ingresado por el usuario.
    campoRutCancelar = document.getElementById("rutInputCancelar").value;

    let rutBorrar= campoRutCancelar;
    index = arrayDatosDespacho.findIndex(x => x.rut ===rutBorrar)
    if(index !=-1){
        alert("Despacho cancelado.")
        borrarDespacho()
    }
    else{
        alert("Rut no encontrado")
    }
}) 