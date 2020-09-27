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

var hidden = false; // Variable para identificar si los elementos están escondidos.

//Función para ocultar o mostrar secciones definidas.
function toggleAll(){
	var header = document.getElementById("headerprincipal");
	var desc = document.getElementById("descuentos");
	var cli = document.getElementById("clientes");
	
	if (hidden){
	  header.style.minHeight = "700px"; //Mostrar la imagen principal.
	  desc.style.display = "block"; //Mostrar descuentos.
	  cli.style.display = "block"; //Mostrar clientes.
	  
	  //ocultar otros elementos recurrentes.
	  ocultarPorId("catalogo")
	  ocultarPorId("consultar")
	  ocultarPorId("solicitar")
	  //ocultarPorId("modificar")
	  //ocultarPorId("cancelar")
	  
	  hidden = false;
	} 
	else {
	  header.style.minHeight = "0"; //Ocultar la imagen principal.
	  desc.style.display = "none"; //Ocultar descuentos.
	  cli.style.display = "none"; //Ocultar clientes.
	  
	  //ocultar otros elementos recurrentes.
	  ocultarPorId("catalogo")
	  ocultarPorId("consultar")
	  ocultarPorId("solicitar")
	  //ocultarPorId("modificar")
	  //ocultarPorId("cancelar")
	  
	  hidden = true;
	}		
}

function ocultar(){
	hidden = false;
	toggleAll();
}

function mostrar(){
	hidden = true;
	toggleAll();
}

function verPorId(id){
	var elemento = document.getElementById(id);
	if (elemento==null) {return "no existe!";}
	ocultar() //Ocultar los elementos distractorios.
	elemento.style.display = "block";
}

function ocultarPorId(id){
	var elemento = document.getElementById(id);
	elemento.style.display = "none";
}

function verCatalogo(){
	verPorId("catalogo");
}

function ver(elemento){
	if (verPorId(elemento)=="no existe!"){
		alert("¡Error de referencia!.");
	}
}

function getDespachoArray() {
  return JSON.parse(localStorage.getItem("Despacho"));
}

function createTablaRut(listado) {
	for (i = 0; i < listado.length; i++) {
		var tablarut = document.getElementById("tablarut");
		var fila = document.createElement("tr");
		var celda1 = document.createElement("td");
		var celda2 = document.createElement("td");
		var celda3 = document.createElement("td");
		console.log("Elementos creados.")
		celda1.innerHTML = i;
		celda2.innerHTML = listado[i].nombre+" "+listado[i].apellido;
		celda3.innerHTML = listado[i].calle+", "+listado[i].comuna;
		fila.appendChild(celda1);
		fila.appendChild(celda2);
		fila.appendChild(celda3);
		tablarut.appendChild(fila);
		}
}

formrut.addEventListener('submit', (e)=>{
    e.preventDefault();
    document.getElementById("tablarut").className = "striped";
    var tablarut = document.getElementById("tablarut");
    listaDespacho = getDespachoArray();
    createTablaRut(listaDespacho);    
})
