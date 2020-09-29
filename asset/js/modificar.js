let campoRut
let datosUsuario

// Eventos
formModificarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Rut ingresado por el usuario.
    campoRut = document.getElementById("rutInputModificar").value;

    // Se buscan coincidencias del rut.
    datosUsuario = encuentraRutModificar(campoRut);
    if (datosUsuario != false){
        //Si se encuentra el rut, se procede a mostrar los campos disponibles.
        var formDatosModificarUI = document.getElementById("formDatosModificar");
        //Remover la clase "ocultar", para hacer visible el formulario.
        formDatosModificarUI.className = "";

        // Rellenar los campos a modificar.
        nombreMod = datosUsuario["nombre"]
        formDatosModificarUI[0].value = nombreMod;
    
        apellidoMod = datosUsuario["apellido"]
        formDatosModificarUI[1].value = apellidoMod;
    
        regionMod = datosUsuario["region"]
        formDatosModificarUI[2].value = regionMod;
    
        calleMod = datosUsuario["calle"]
        formDatosModificarUI[4].value = calleMod;
    
        comunaMod = datosUsuario["comuna"]
        formDatosModificarUI[3].value = comunaMod;

        depaMod = datosUsuario["departamento"]
        formDatosModificarUI[5].value = depaMod;
    }
    else {
        alert("No se enuentran coincidencias");
    }
})

// Buscar el rut que se desea modificar, devuelve True/False.
function encuentraRutModificar(campoRut){
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
    
})