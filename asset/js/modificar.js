// Eventos
formModificarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Rut ingresado por el usuario.
    campoRut = document.getElementById("rutInputModificar").value;

    // Se buscan coincidencias del rut.
    var encontrado = encuentraRutModificar(campoRut);
    if (encontrado != false){
        //Si se encuentra el rut, se procede a mostrar los campos disponibles.
        var formDatosModificarUI = document.getElementById("formDatosModificar");
        //Sacamos la clase ocultar, para hacer visible el formulario.
        formDatosModificarUI.className = "";
        
        // Rellenar los campos.
        
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

/*
var datoTemp;
//funciones.
function encontrarAndRellenar(){
    var tablaModificarRut = document.getElementById("tablaModificarRut");
    var formDatosModificarUI = document.getElementById("formDatosModificar");
    
    datoTemp = buscarCoincidencia('#formModificarRut #rut');

    nombreMod = tablaModificarRut.rows[1].cells[3].innerText
    formDatosModificarUI[0].value = nombreMod;

    apellidoMod = tablaModificarRut.rows[1].cells[4].innerText
    formDatosModificarUI[1].value = apellidoMod;

    regionMod = tablaModificarRut.rows[1].cells[5].innerText
    formDatosModificarUI[2].value = regionMod;

    calleMod = tablaModificarRut.rows[1].cells[6].innerText
    formDatosModificarUI[4].value = calleMod;

    comunaMod = tablaModificarRut.rows[1].cells[7].innerText
    formDatosModificarUI[3].value = comunaMod;

    depaMod = tablaModificarRut.rows[1].cells[8].innerText
    formDatosModificarUI[5].value = depaMod;
}

// Eventos
formModificarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    tablaModificarRut.className = "striped";
    formDatosModificarUI.className = "";
    limpiarTabla("tablaModificarRut");
    encontrarAndRellenar();
})

formDatosModificar.addEventListener('submit', (e)=>{
    e.preventDefault();

    rutUI2 = document.getElementById('formModificarRut')[0].value
    nombreUI2 = formDatosModificarUI[0].value;
    apellidoUI2 = formDatosModificarUI[1].value;
    regionUI2 = formDatosModificarUI[2].value;
    calleUI2 = formDatosModificarUI[4].value;
    comunaUI2 = formDatosModificarUI[3].value;
    departamentoUI2 = formDatosModificarUI[5].value;

    codUI0 = tablaModificarRut.rows[1].cells[1].innerText;
    descUI0 = tablaModificarRut.rows[1].cells[2].innerText;
    precioUI0 = tablaModificarRut.rows[1].cells[9].innerText;

    //borrar el registro del array.
    value = datoTemp;
    arrayDatosDespacho = arrayDatosDespacho.filter(item => item !== value);

    crearItem(rutUI2,nombreUI2,apellidoUI2,regionUI2,comunaUI2,calleUI2,departamentoUI2, codUI0, descUI0, precioUI0);
    guardarDatos();

    alert("Datos modificados!");
    formModificarRut.reset();
    formDatosModificar.reset();
    limpiarTabla("tablaModificarRut");
    tablaModificarRut.className = "hide";
    formDatosModificar.className = "hide";
})
*/