/* 
    Formulario
*/
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('radioPelicula').addEventListener("click", (event) => {
        listarGenerosFormulario("Pelicula");

        document.getElementById("duracionEpisodios").innerHTML = "<label for='duracion'>· Duración</label><input type='text' name='duracion' id='duracion' required>";
    })
    document.getElementById('radioAnime').addEventListener("click", (event) => {
        listarGenerosFormulario("Anime");

        document.getElementById("duracionEpisodios").innerHTML = "<label for='episodios'>· Episodios</label><input type='text' name='episodios' id='episodios' required>";
    })
    listarGenerosFormulario("Pelicula");
    document.getElementById("duracionEpisodios").innerHTML = "<label for='duracion'>· Duración:</label><input type='text' name='duracion' id='duracion' required>";

    document.getElementById('anadir').addEventListener("click", (event) => {
        event.preventDefault();
        let bibliotecaAux = cargarBibliotecaDesdeLocalStorage();

        let tipo = formulario.radioFormulario.value;
        let titulo = formulario.titulo.value;

        let generos = document.querySelectorAll("#listaGeneros input[type='checkbox']:checked");
        let resGeneros = [];
        generos.forEach(element => {
            resGeneros.push(element.value);
        })

        let anyo = formulario.anyo.value;
        let favorito = formulario.favorito.checked;
        let puntuacion = formulario.puntuacion.value;
        
        if(tipo == "Anime"){
            let episodios = formulario.episodios.value;
            let idCorrespondiente = bibliotecaAux.idLibre("Anime");

            bibliotecaAux.agregarAnime(new Anime(idCorrespondiente,titulo,resGeneros,anyo,episodios,favorito,puntuacion));
            guardarBibliotecaEnLocalStorage(bibliotecaAux);
        }
        else {
            let idCorrespondiente = bibliotecaAux.idLibre("Pelicula");
            let duracion = formulario.duracion.value;
            
            bibliotecaAux.agregarPelicula(new Pelicula(idCorrespondiente,titulo,resGeneros,anyo,duracion,favorito,puntuacion));
            guardarBibliotecaEnLocalStorage(bibliotecaAux);
        }

        /* Redireccionar */
        location.replace("index.html");
    })
});

function listarGenerosFormulario(tipo){
    let res = "";
    let arrayAux;

    if (tipo == "Anime"){
        arrayAux = generosAnime;
    }
    else {
        arrayAux = generosPeliculas;
    }
    arrayAux.forEach(genero => {
        res += "<div><input type='checkbox' name='"+genero+"' value='"+genero+"'></input><label for='"+genero+"'>"+genero+"</label></div>"
    });

    document.getElementById("listaGeneros").innerHTML = res;
}

