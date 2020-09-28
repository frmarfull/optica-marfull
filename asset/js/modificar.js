// Eventos
formModificarRut.addEventListener('submit', (e)=>{
    e.preventDefault();
    var tablaModificarRut = document.getElementById("tablaModificarRut");
    tablaModificarRut.className = "striped";
    let formDatosModificarUI = document.getElementById("formDatosModificar");
    formDatosModificarUI.className = "";
    limpiarTabla("tablaModificarRut");
    let datoTemp = buscarCoincidencias('#formModificarRut #rut');
    
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
    
})

formDatosModificar.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("Datos modificados!");
    formModificarRut.reset();
    formDatosModificar.reset();
    limpiarTabla("tablaModificarRut");
    tablaModificarRut.className = "hide";
    formDatosModificar.className = "hide";
})

