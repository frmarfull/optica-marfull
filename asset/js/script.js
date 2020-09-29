// inicialización de elementos del Materialze.
document.addEventListener('DOMContentLoaded', function() {
    //El carrusel de Materialize.
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    //Mensaje que ayuda.
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
    //Dropdown buttons.
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {hover:true});
    //Efecto Materialboxed (La imagen se va agrandando).
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
    //Modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

let hidden = false; // Variable para identificar si los elementos están escondidos.
let arrayDatosDespacho = leerDatos();

//funciones
function crearItem(rut,nombre,apellido,region,
    comuna,calle,departamento, cod, desc, precio){
    let item={
        rut: rut,
        nombre: nombre,
        apellido: apellido,
        region: region,
        comuna: comuna,
        calle: calle,
        departamento:departamento,
        cod:cod,
        desc:desc,
        precio:precio
    }
    arrayDatosDespacho.push(item);
    return item;
}

function leerDatos() {
    if (JSON.parse(localStorage.getItem("Despacho"))!=null){
        return JSON.parse(localStorage.getItem("Despacho"));
    }
    else {
        return [];
    }
}

function guardarDatos(){
    localStorage.setItem('Despacho',JSON.stringify(arrayDatosDespacho));
}
function borrarDespacho(){
    arrayDatosDespacho.splice(index,1);
    guardarDatos();
}
function modificarDespacho(){
    arrayDatosDespacho[index]={rutModificar,nombreModificar,apellidoModificar,regionModificar,
                               comunaModificar,calleModificar,departamentoModificar}
    guardarDatos();
}

//Función para ocultar o mostrar secciones definidas.
function toggleAll(){
	var header = document.getElementById("headerprincipal");
	var desc = document.getElementById("descuentos");
    
    // Si todo el home está escondido, entonces se despliega el home.
	if (hidden){
	  header.style.minHeight = "700px"; //Mostrar la imagen principal.
	  desc.style.display = "block"; //Mostrar descuentos.
	  
	  //ocultar otros elementos recurrentes.
	  ocultarPorId("catalogo");
	  ocultarPorId("consultar");
	  ocultarPorId("solicitar");
	  ocultarPorId("modificar");
	  ocultarPorId("cancelar");
	  
	  hidden = false;
	} 
	else {
        //Si todo está desplegado, se esconden los elementos del home.
	  header.style.minHeight = "0"; //Ocultar la imagen principal.
	  desc.style.display = "none"; //Ocultar descuentos.
	  
	  //ocultar otros elementos recurrentes.
	  ocultarPorId("catalogo");
	  ocultarPorId("consultar");
	  ocultarPorId("solicitar");
	  ocultarPorId("modificar");
	  ocultarPorId("cancelar");
	  
	  hidden = true;
	}		
}

// Ocultar Todas las secciones del home.
function ocultar(){
	hidden = false;
	toggleAll();
}

//Mostrar sólo las seccioines del home.
function mostrar(){
    window.location.hash = "/home";
	hidden = true;
	toggleAll();
}

// Hacer Visible únicamente un elemento por su ID, ocultando los demás elementos.
function verPorId(id){
    window.location.hash = `/${id}`;
	var elemento = document.getElementById(id);
	if (elemento==null) {return "no existe!";}
	ocultar() //Ocultar los elementos distractorios.
	elemento.style.display = "block";
}

// Ocultar un elemento por su ID.
function ocultarPorId(id){
	var elemento = document.getElementById(id);
	elemento.style.display = "none";
}

// Mostras sólo el catálogo.
function verCatalogo(){
	verPorId("catalogo");
}

// Mostrar sólo un elemento por su ID.
function ver(elemento){
	if (verPorId(elemento)=="no existe!"){
		alert("¡Error de referencia!.");
	}
}

function limpiarTabla(id){
    var tablaConDatos = document.getElementById(id)
    if (tablaConDatos.rows.length > 1){
        tablaConDatos.deleteRow(1);
        limpiarTabla(id);
    }
}

function buscarAndEliminarCoincidencia(id){
	let encontrado = false;
    let rutBuscado = document.querySelector(id).value;
    for (i=0;i<arrayDatosDespacho.length;i++){
        if (arrayDatosDespacho[i]["rut"]==rutBuscado){
            insertarFila(arrayDatosDespacho[i])
			encontrado = true;
			return arrayDatosDespacho[i];
        }
    }
    if (!encontrado){
        alert("No se encontraron coincidencias.")
    }
}

function buscarCoincidencia(id){
	let encontrado = false;
    let rutBuscado = document.querySelector(id).value;
    for (i=0;i<arrayDatosDespacho.length;i++){
        if (arrayDatosDespacho[i]["rut"]==rutBuscado){
            insertarFila(arrayDatosDespacho[i])
			encontrado = true;
			return arrayDatosDespacho[i];
        }
    }
    if (!encontrado){
        alert("No se encontraron coincidencias.")
    }
}

function buscarCoincidencias(id){
	let encontrado = false;
    let rutBuscado = document.querySelector(id).value;
    for (i=0;i<arrayDatosDespacho.length;i++){
        if (arrayDatosDespacho[i]["rut"]==rutBuscado){
            insertarFila(arrayDatosDespacho[i])
			encontrado = true;
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
	
	celda1.className = "celda";

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

function addToCarrito(codigo){
    var tablacarrito = document.getElementById("datosTablaCarrito");
    if (tablacarrito.rows.length > 0) {
        alert("Sólo un elemento por cliente.")
    }
    else
    {
	var fila = document.createElement("tr");
	var celda1 = document.createElement("td");
	var celda2 = document.createElement("td");
	var celda3 = document.createElement("td");
	var celda4 = document.createElement("td");

	// Buscamos los datos del producto deseado.
	var prod = document.getElementById(codigo);
	var desc = prod.getElementsByClassName("desc")[0].innerText; // Descripción.
	var cod = prod.getElementsByClassName("cod")[0].innerText; // Código
	var precio = prod.getElementsByClassName("precio")[0].innerText; // Precio.
	
	// Rellenamos las celdas temporales con los datos.
	celda1.innerHTML = tablacarrito.rows.length; // índice.
	celda2.innerHTML = cod; // Código.
	celda3.innerHTML = desc; // Descripción.
	celda4.innerHTML = precio; // Valor del producto.
	fila.appendChild(celda1);
	fila.appendChild(celda2);
	fila.appendChild(celda3);
	fila.appendChild(celda4);
    tablacarrito.appendChild(fila); // Elemento añadido.
    }
}

// Eventos
// Al presionar comprar, en un botón.
document.getElementById("btnComprar001").addEventListener("click", function() {
	// Buscamos la tabla de la sección "Solicitar despacho".
    addToCarrito("info001");
  });
document.getElementById("btnComprar004").addEventListener("click", function() {
    addToCarrito("info004");
  });
document.getElementById("btnComprar005").addEventListener("click", function() {
    addToCarrito("info005");
  });
document.getElementById("btnComprar006").addEventListener("click", function() {
    addToCarrito("info006");
  });  
document.getElementById("btnComprar007").addEventListener("click", function() {
    addToCarrito("info007");
  });
document.getElementById("btnComprar008").addEventListener("click", function() {
    addToCarrito("info008");
  });

// Monitorear si cambia la ruta.
$(window).on('hashchange', function() {
    if (window.location.hash == "#/home") {
        mostrar();
    }
    else {
        conducto(window.location.hash)
    }
});

// Conducir al usuario a la sección del fragment en la url.
function conducto(){
    fragment = window.location.hash[0] + window.location.hash[1];
    url = window.location.hash;

    // Sólo si es un fragment, y NO una querry u otra parafernalia.
    if (fragment == "#/" && url.length > 2){
        // entonces vamos a la vista del fragment deseado,
        // sacando las decoraciones del fragment ("#/")
        ver(url.slice(2));
    }
}

//Esta función cambia de escena al usuario, del home al catálogo y viceversa.
function saltoDeDimension(){
    var vitrineando = document.getElementById("catalogo").style.display;
    var btnFlotante = document.getElementById("btnFlotante");

    if (vitrineando == "none"|| vitrineando == ""){
        ocultar();
        verCatalogo();
        btnFlotante.innerText = "home"
        window.location.hash = "/catalogo"
    }
    else {
        mostrar();
        btnFlotante.innerText = "visibility"
        window.location.hash = "/home"
    }
}