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
  });

// INTENTO EXITOSO DE MAPA USANDO LA API DE GOOGLE MAPS
/*
  function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
*/