// Eventos
formrut.addEventListener('submit', (e)=>{
    e.preventDefault();
    var tablarut = document.getElementById("tablarut");
    tablarut.className = "striped";
    limpiarTabla("tablarut");
    buscarCoincidencias('#formrut #rut');
})

