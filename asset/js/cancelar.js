var tablaCancelarRut = document.getElementById("tablaCancelarRut");
var formDatosCancelarUI = document.getElementById("datosTablaCancelaRut");
let datoTemp2;

// Eventos
formCancelarRut.addEventListener('submit', (e)=>{

    e.preventDefault();
    tablaCancelarRut.className = "striped";
    formDatosCancelarUI.className = "";
    limpiarTabla("tablaCancelarRut");
    encontrarAndRellenar();
})

//funciones.
function encontrarAndRellenar(){
    datoTemp2 = buscarCoincidencia('#formMCancelarRut #rut');

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

formDatosModificar.addEventListener('submit', (e)=>{
    e.preventDefault();

    rutUI2 = document.getElementById('formCancelarRut')[0].value
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
    value = datoTemp2;
    arrayDatosDespacho = arrayDatosDespacho.filter(item => item !== value);
    guardarDatos();

    alert("Despacho Cancelado!");
    formModificarRut.reset();
    formDatosModificar.reset();
    limpiarTabla("tablaCancelarRut");
    tablaModificarRut.className = "hide";
    formDatosModificar.className = "hide";
})

