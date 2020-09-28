//variables globales

const formularioUI = document.querySelector('#formulario');
const rutUI = document.querySelector('#rut');
const nombreUI= document.querySelector('#nombre');
const apellidoUI= document.querySelector('#apellido');
const regionUI= document.querySelector('#region');
const calleUI= document.querySelector('#calle');
const comunaUI= document.querySelector('#comuna');
const departamentoUI= document.querySelector('#departamento');

//Eventos
formRutSolicitar.addEventListener('submit', (e)=>{
    e.preventDefault();
    var tablacarrito = document.getElementById("tablacarrito");
    if (tablacarrito.rows.length > 1){
        document.getElementById("formDatosSolicitar").className = "";
    }
})

formDatosSolicitar.addEventListener('submit', (e)=>{
    e.preventDefault();
    let rutUI= document.querySelector('#formRutSolicitar #rut').value;
    let nombreUI= document.querySelector('#nombre').value;
    let apellidoUI= document.querySelector('#apellido').value;
    let regionUI= document.querySelector('#region').value;
    let calleUI= document.querySelector('#calle').value;
    let comunaUI= document.querySelector('#comuna').value;
    let departamentoUI= document.querySelector('#departamento').value;
    
    let prod = document.getElementById("tablacarrito");
    let codUI = prod.rows[1].cells[1].innerText;
	let descUI = prod.rows[1].cells[2].innerText;
	let precioUI = prod.rows[1].cells[3].innerText;


    crearItem(rutUI,nombreUI,apellidoUI,regionUI,comunaUI,calleUI,departamentoUI, codUI, descUI, precioUI);
    guardarDatos();
    formDatosSolicitar.reset();
    limpiarTabla("tablacarrito");
    alert("¡Solicitud agregada!");
    document.getElementById("formDatosSolicitar").className = "hide";
    formRutSolicitar.reset();
})

/*
formularioBorrar.addEventListener('submit', (e)=>{
    e.preventDefault();
    let rutBorrar= document.querySelector('#rutBorrar').value.toLowerCase();
    index = arrayDatosDespacho.findIndex(x => x.rut ===rutBorrar)
    if(index !=-1){
        borrarDespacho()
    }
    else{
        alert("Rut no encontrado")
    }
    formularioBorrar.reset();
})

formularioModificar.addEventListener('submit',(e)=>{
    e.preventDefault();
    let rut= document.querySelector('#modificarRut').value.toLowerCase();
    let nombre=document.querySelector('#modificarNombre').value;
    let apellido=document.querySelector('#modificarApellido').value;
    let region=document.querySelector('#modificarRegion').value;
    let comuna=document.querySelector('#modificarComuna').value;
    let calle=document.querySelector('#modificarCalle').value;
    let departamento=document.querySelector('#modificarDepartamento').value;

    index = arrayDatosDespacho.findIndex(x => x.rut ===rut)
    if(index !=-1){
        arrayDatosDespacho[index]={rut,nombre,apellido,region,
            comuna,calle,departamento}
            guardarDatos();
            alert("Datos del despacho cambiados")

    }
    else{
        alert("Rut no encontrado")
    }
    formularioModificar.reset();

})
*/

//autocompletar
var regiones =['Arica y Parinacota','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaiso','Metropolitana de Santiago','Libertador General Bernardo O\'Higgins','Maule','Biobío','La Araucanía','Los Ríos','Los Lagos','Aisén del General Carlos Ibáñez del Campo','Magallanes y de la Antártica Chilena']
var comunas = ['Arica','Camarones','General Lagos','Putre','Alto Hospicio','Iquique','Camiña','Colchane','Huara','Pica','Pozo Almonte','Antofagasta','Mejillones','Sierra Gorda','Taltal','Calama','Ollague','San Pedro de Atacama','María Elena','Tocopilla','Chañaral','Diego de Almagro','Caldera','Copiapó','Tierra Amarilla','Alto del Carmen','Freirina','Huasco','Vallenar','Canela','Illapel','Los Vilos','Salamanca','Andacollo','Coquimbo','La Higuera','La Serena','Paihuaco','Vicuña','Combarbalá','Monte Patria','Ovalle','Punitaqui','Río Hurtado','Isla de Pascua','Calle Larga','Los Andes','Rinconada','San Esteban','La Ligua','Papudo','Petorca','Zapallar','Hijuelas','La Calera','La Cruz','Limache','Nogales','Olmué','Quillota','Algarrobo','Cartagena','El Quisco','El Tabo','San Antonio','Santo Domingo','Catemu','Llaillay','Panquehue','Putaendo','San Felipe','Santa María','Casablanca','Concón','Juan Fernández','Puchuncaví','Quilpué','Quintero','Valparaíso','Villa Alemana','Viña del Mar','Colina','Lampa','Tiltil','Pirque','Puente Alto','San José de Maipo','Buin','Calera de Tango','Paine','San Bernardo','Alhué','Curacaví','María Pinto','Melipilla','San Pedro','Cerrillos','Cerro Navia','Conchalí','El Bosque','Estación Central','Huechuraba','Independencia','La Cisterna','La Granja','La Florida','La Pintana','La Reina','Las Condes','Lo Barnechea','Lo Espejo','Lo Prado','Macul','Maipú','Ñuñoa','Pedro Aguirre Cerda','Peñalolén','Providencia','Pudahuel','Quilicura','Quinta Normal','Recoleta','Renca','San Miguel','San Joaquín','San Ramón','Santiago','Vitacura','El Monte','Isla de Maipo','Padre Hurtado','Peñaflor','Talagante','Codegua','Coínco','Coltauco','Doñihue','Graneros','Las Cabras','Machalí','Malloa','Mostazal','Olivar','Peumo','Pichidegua','Quinta de Tilcoco','Rancagua','Rengo','Requínoa','San Vicente de Tagua Tagua','La Estrella','Litueche','Marchihue','Navidad','Peredones','Pichilemu','Chépica','Chimbarongo','Lolol','Nancagua','Palmilla','Peralillo','Placilla','Pumanque','San Fernando','Santa Cruz','Cauquenes','Chanco','Pelluhue','Curicó','Hualañé','Licantén','Molina','Rauco','Romeral','Sagrada Familia','Teno','Vichuquén','Colbún','Linares','Longaví','Parral','Retiro','San Javier','Villa Alegre','Yerbas Buenas','Constitución','Curepto','Empedrado','Maule','Pelarco','Pencahue','Río Claro','San Clemente','San Rafael','Talca','Arauco','Cañete','Contulmo','Curanilahue','Lebu','Los Álamos','Tirúa','Alto Biobío','Antuco','Cabrero','Laja','Los Ángeles','Mulchén','Nacimiento','Negrete','Quilaco','Quilleco','San Rosendo','Santa Bárbara','Tucapel','Yumbel','Chiguayante','Concepción','Coronel','Florida','Hualpén','Hualqui','Lota','Penco','San Pedro de La Paz','Santa Juana','Talcahuano','Tomé','Bulnes','Chillán','Chillán Viejo','Cobquecura','Coelemu','Coihueco','El Carmen','Ninhue','Ñiquen','Pemuco','Pinto','Portezuelo','Quillón','Quirihue','Ránquil','San Carlos','San Fabián','San Ignacio','San Nicolás','Treguaco','Yungay','Carahue','Cholchol','Cunco','Curarrehue','Freire','Galvarino','Gorbea','Lautaro','Loncoche','Melipeuco','Nueva Imperial','Padre Las Casas','Perquenco','Pitrufquén','Pucón','Saavedra','Temuco','Teodoro Schmidt','Toltén','Vilcún','Villarrica','Angol','Collipulli','Curacautín','Ercilla','Lonquimay','Los Sauces','Lumaco','Purén','Renaico','Traiguén','Victoria','Corral','Lanco','Los Lagos','Máfil','Mariquina','Paillaco','Panguipulli','Valdivia','Futrono','Lago Ranco','Río Bueno','Ancud','Castro','Chonchi','Curaco de Vélez','Dalcahue','Puqueldón','Queilén','Quemchi','Quellón','Quinchao','Calbuco','Cochamó','Fresia','Frutillar','Llanquihue','Los Muermos','Maullín','Puerto Montt','Puerto Varas','Osorno','Puero Octay','Purranque','Puyehue','Río Negro','San Juan de la Costa','San Pablo','Chaitén','Futaleufú','Hualaihué','Palena','Aisén','Cisnes','Guaitecas','Cochrane','O\'higgins','Tortel','Coihaique','Lago Verde','Chile Chico','Río Ibáñez','Antártica','Cabo de Hornos','Laguna Blanca','Punta Arenas','Río Verde','San Gregorio','Porvenir','Primavera','Timaukel','Natales','Torres del Paine'];
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            
            b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            
                b.addEventListener("click", function(e) {
                
                inp.value = this.getElementsByTagName("input")[0].value;
                
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          
          currentFocus++;
          
          addActive(x);
        } else if (e.keyCode == 38) { 
          
          currentFocus--;
          
          addActive(x);
        } else if (e.keyCode == 13) {
          
          e.preventDefault();
          if (currentFocus > -1) {
            
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      
      if (!x) return false;
      
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
    
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
  autocomplete(document.getElementById("region"), regiones);
  autocomplete(document.getElementById("comuna"), comunas);
