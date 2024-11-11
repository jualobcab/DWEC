// Creamos las 3 funciones del ejercicio
function fichar(){
    // Crear una variable para almacenar la fecha actual
    let fechaActual = new Date();
    let ficha = fechaActual.toLocaleString(); //Convierte la fecha a un formato legible

    let fichajes = localStorage.getItem('fichajes');

    //Si no existe
    if(!fichajes){
        fichajes=[];
    }else{
        fichajes=JSON.parse(fichajes)
    }

    //añadir el string
    fichajes.push(ficha);

    // GUARDAMOS
    localStorage.setItem('fichajes', JSON.stringify(fichajes));
    alert('Fichaje guardado' + ficha);
}

function mostrarFichajes(){
    let fichajes = localStorage.getItem('fichajes');
    let listarFichajes = document.getElementById('listaFichajes');

    //Analizamos si existen fichajes y si no mostramos un mensaje
    if(!fichajes){
        listarFichajes.innerHTML='<li> No hay fichajes</li>';
        return;
    }
    
    // CONVERTIMOS JSON
    fichajes=JSON.parse(fichajes);

    // Recorremos los fichajes con un bucle (for each)
    // y los mostramos
    listarFichajes.innerHTML="";

    fichajes.forEach(function(fichaje){
        let item = document.createElement('li');
        item.textContent = fichaje;
        listarFichajes.appendChild(item);
    });

}

function resetearFichajes(){
    // Borramos nuestra lista de fichajes
    localStorage.removeItem('fichajes');
    alert('Fichajes eliminados para SIEMPRE');

    document.getElementById('listaFichajes').innerHTML="";
}