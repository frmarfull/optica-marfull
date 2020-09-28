// Eventos
formrut.addEventListener('submit', (e)=>{
    e.preventDefault();
    var tablarut = document.getElementById("tablarut");
    tablarut.className = "striped";
    limpiarTabla("tablarut");
    buscarCoincidencias();
})

// funciones.
function buscarCoincidencias(){
    let encontrado = false;
    let rutBuscado = document.querySelector('#formrut #rut').value;
    for (i=0;i<arrayDatosDespacho.length;i++){
        if (arrayDatosDespacho[i]["rut"]==rutBuscado){
            insertarFila(arrayDatosDespacho[i])
            encontrado = true;
            //alert("ENCONTRADO!")
        }
    }
    if (!encontrado){
        alert("No se encontraron coincidencias.")
    }
}


function insertarFila(datos){
	// Buscamos la tabla de la sección "Consultar despacho".
    var tablaconsultar = document.getElementById("datosTablaRut");
	var fila = document.createElement("tr");
	var celda1 = document.createElement("td");
	var celda2 = document.createElement("td");
	var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");
    var celda6 = document.createElement("td");
    var celda7 = document.createElement("td");
    var celda8 = document.createElement("td");
    var celda9 = document.createElement("td");
    var celda10 = document.createElement("td");
    var celda11 = document.createElement("td");

    celda1.innerHTML = tablaconsultar.rows.length+1;
    celda2.innerHTML = datos["cod"];
    celda3.innerHTML = datos["desc"];
    celda4.innerHTML = datos["nombre"];
    celda5.innerHTML = datos["apellido"];
    celda6.innerHTML = datos["region"];
    celda7.innerHTML = datos["calle"];
    celda8.innerHTML = datos["comuna"];
    celda9.innerHTML = datos["departamento"];
    celda10.innerHTML = datos["precio"];
    //celda11.innerHTML = datos["rut"];
    //celda.innerHTML = datos[""];


    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);
    fila.appendChild(celda6);
    fila.appendChild(celda7);
    fila.appendChild(celda8);
    fila.appendChild(celda9);
    fila.appendChild(celda10);
    tablaconsultar.appendChild(fila);
}