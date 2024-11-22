"use strict";

////////////////////////////////////////////////////////
//////////       FUNTIONS      /////////////////////////
////////////////////////////////////////////////////////
////////////////////  Variables   //////////////////////


////////////////////  Constantes  //////////////////////
const generosPeliculas = [
    "Acción",
    "Aventura",
    "Comedia",
    "Drama",
    "Fantasía",
    "Ciencia ficción (Sci-Fi)",
    "Horror",
    "Romance",
    "Misterio",
    "Thriller",
    "Suspense",
    "Crimen",
    "Animación",
    "Documental",
    "Musical",
    "Biográfico",
    "Histórico",
    "Guerra",
    "Western",
    "Terror psicológico",
    "Superhéroes",
    "Slice of Life",
    "Experimental",
    "Psicológico",
    "Terror sobrenatural",
];
const generosAnime = [
    "Acción",
    "Aventura",
    "Comedia",
    "Drama",
    "Fantasía",
    "Ciencia ficción (Sci-Fi)",
    "Horror",
    "Romance",
    "Misterio",
    "Psicológico",
    "Superhéroes",
    "Thriller",
    "Mecha",
    "Shonen",
    "Shojo",
    "Seinen",
    "Josei",
    "Slice of Life",
    "Isekai",
    "Deportes",
    "Histórico",
    "Musical",
    "Cyberpunk",
    "Eroge/Ecchi",
    "Yuri",
    "Yaoi",
    "Magia",
    "Samurais",
    "Terror",
    "Harem",
    "Gore",
    "Shoujo-ai",
    "Boys' Love (BL)"
];

//////////////////////  Clases  /////////////////////////
class Biblioteca {
    constructor (){
        this.listaPeliculas = [];
        this.listaAnimes = [];
    }

    /// Agregación
    agregarPelicula(pelicula){
        this.listaPeliculas.push(pelicula);
    }
    agregarAnime(anime){
        this.listaAnimes.push(anime);
    }

    /// Eliminación
    eliminarPelicula(id){
        let indice = this.listaPeliculas.findIndex(pelicula => pelicula.id == id);
        if (indice !== -1) {
            this.listaPeliculas.splice(indice, 1);
            console.log(`Película con ID ${id} eliminada.`);
        } else {
            console.log(`Película con ID ${id} no encontrada.`);
        }
    }
    eliminarAnime(id){
        let indice = this.listaAnimes.findIndex(anime => anime.id == id);
        if (indice !== -1) {
            this.listaAnimes.splice(indice, 1);
            console.log(`Anime con ID ${id} eliminado.`);
        } else {
            console.log(`Anime con ID ${id} no encontrado.`);
        }
    }

    /// Filtraje
    filtrarPorGeneros(listaGeneros,tipo){ // tipo debe ser pelicula o anime
        let res = [];
        let coincide = false;
        let linea = `lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`;

        this[linea].forEach(element => {
                coincide = false;
                element.generos.forEach(genero => {
                    if(listaGeneros.includes(genero)){
                        coincide = true;
                    }
                });
                if (coincide){
                    res.push(element);
                }
        });
        return res;
    }

    clasificarPorPuntuacion(tipo){
        return this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`].sort((a,b) => b.puntuacion - a.puntuacion);
    }

    marcarFavorito(id, tipo){
        let longitud = this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`].length;
        for (var i = 0; i<longitud ; i++){
            if (this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`][i].id == id){
                this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`][i].favorito = !this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`][i].favorito;
                break;
            }
        }
        
        guardarBibliotecaEnLocalStorage(this);
        pintarLista(this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`],tipo);
    }

    // Encontrar ID mas alta vacia
    idLibre(tipo){
        let longitud = this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`].length;
        let res = 0;

        for(var i = 1; i<=longitud; i++){
            let encontrado = false;
            for(var j = 0; j<longitud; j++){
                if (this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`][j].id == i){
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado){
                res = 1;
                break;
            }
        }

        if (res == 0){
            res = longitud+1;
        }

        return res;
    }
}


//////////////////////  Objetos  /////////////////////////
function Pelicula(id,titulo,generos,anyo,duracion,favorito,puntuacion){
    this.id = id;
    this.titulo = titulo;
    this.generos = generos;
    this.anyo = anyo;
    this.duracion = duracion;
    this.favorito = favorito;
    this.puntuacion = puntuacion;
}
Pelicula.prototype.setFavorito = function(){
    this.favorito = !this.favorito;
}
Pelicula.prototype.obtenerTipo = function(){return "Pelicula"}
function Anime(id,titulo,generos,anyo,episodios,favorito,puntuacion){
    this.id = id;
    this.titulo = titulo;
    this.generos = generos;
    this.anyo = anyo;
    this.episodios = episodios;
    this.favorito = favorito;
    this.puntuacion = puntuacion;
}
Anime.prototype.setFavorito = function(){
    this.favorito = !this.favorito;
}
Anime.prototype.obtenerTipo = function(){return "Anime"}

function guardarBibliotecaEnLocalStorage(biblioteca) {
    
    
    // Guardamos el objeto en localStorage
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}

function cargarBibliotecaDesdeLocalStorage() {
    // Obtenemos el objeto de localStorage
    const bibliotecaGuardada = localStorage.getItem("biblioteca");
    
    // Si existe el objeto en localStorage
    if (bibliotecaGuardada) {
        // Devolvemos el objeto Biblioteca
        let res = JSON.parse(bibliotecaGuardada);
        let bibliotecaAux = new Biblioteca();
        bibliotecaAux.listaAnimes = res.listaAnimes;
        bibliotecaAux.listaPeliculas = res.listaPeliculas;

        return bibliotecaAux;
    }
    
    // Si no existe en localStorage, devolvemos una nueva instancia vacía
    return new Biblioteca();
}

function botonBorrado(id, tipo) {
    if (tipo == "Anime"){
        biblioteca.eliminarAnime(id);
    }
    else if (tipo == "Pelicula"){
        biblioteca.eliminarPelicula(id);
    }

    guardarBibliotecaEnLocalStorage(biblioteca);
    pintarLista(biblioteca[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}s`], tipo);
}

function pintarLista(array, tipo) {
    let res = "";

    array = array.sort((a,b) => b.puntuacion - a.puntuacion);

    array.forEach(instancia => {
        res += "<div class='card' style='width: 18rem;'><div class='card-body'>";
        res += "<div class='tituloBorrado'><h5 class='card-title'>"+instancia.titulo+"</h5>";
        res += '<div class="icon-delete" onclick="botonBorrado('+instancia.id+',\''+tipo+'\')"></div></div>';
        res += "<h6 class='card-subtitle mb-2 text-muted'>"+tipo+"</h6>";
        res += "<fieldset><legend>Géneros:</legend><ul>";
        
        instancia.generos.forEach(genero => {
            res += "<li><p class='card-text'>"+genero+"</p></li>";
        })
        
        res += "</ul></fieldset><p class='card-text'>·Año: "+instancia.anyo+"</p>";
        if (tipo == 'Anime'){
            res += "<p class='card-text'>·Episodios: "+instancia.episodios+"</p>";
        }
        else {
            res += "<p class='card-text'>· Duracion: "+instancia.duracion+"</p>";
        }
        res += "<div class='puntuacionYFavorito'><p class='card-text puntuacion'>"+instancia.puntuacion+"</p>";
        res += '<label class="like"><input class="corazon" type="checkbox" onclick="biblioteca.marcarFavorito('+instancia.id+', \''+tipo+'\')"';
        if (instancia.favorito){
            res += "checked='true'";
        }

        res += "/><div class='hearth'></div></label></div></div></div>";
    });

    document.getElementById("listado").innerHTML = res;
}

function listarGeneros(tipo){
    let res = "";
    let arrayAux;

    if (tipo == "Anime"){
        arrayAux = generosAnime;
    }
    else {
        arrayAux = generosPeliculas;
    }
    arrayAux.forEach(genero => {
        res += "<option value='"+genero+"'>"+genero+"</option>"
    });

    document.getElementById("generos").innerHTML = res;
}

document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById('botonFiltrar')){
        document.getElementById('botonFiltrar').addEventListener("click", (event) => {
        event.preventDefault();
        let tipo = formulario.tipo.value;
        let genero = formulario.generos.value;

        biblioteca.clasificarPorPuntuacion(tipo);

        pintarLista(biblioteca.filtrarPorGeneros([genero],tipo),tipo);
        });
        listarGeneros("Pelicula");
    }
    
    if (document.getElementById('menuPelicula')){
        document.getElementById('menuPelicula').addEventListener("click", (event) => {
        pintarLista(biblioteca['listaPeliculas'], "Pelicula");
        })
    }
    
    if (document.getElementById('menuAnime')){
        document.getElementById('menuAnime').addEventListener("click", (event) => {
        pintarLista(biblioteca['listaAnimes'], "Anime");
        })
    }
});

////////////////////////////////////////////////////////
//////////////      MAIN      //////////////////////////
////////////////////////////////////////////////////////
let biblioteca = cargarBibliotecaDesdeLocalStorage();


/* Ejecutar para cargar algunas instancias */
function pruebaProfesor(){
    let peli1 = new Pelicula(1,"Dune", ["Acción","Guerra","Aventura"], "2022", "200 mnts", true, 9.5);
    let peli2 = new Pelicula(2,"Toy Story",["Aventura","Animación"],"1995","122 mnts",false,7);
    let peli3 = new Pelicula(3,"Alien",["Terror psicológico","Thriller","Acción"],"1978","117 mnts",false,8);
    let peli4 = new Pelicula(4,"ET",["Aventura","Romance"],"1980","158 mnts",false,6);
    let peli5 = new Pelicula(5,"Viernes 13",["Horror","Misterio","Suspense"],"1999","120 mnts",false,7);
    let peli6 = new Pelicula(6,"Starship Troopers",["Ciencia ficción (Sci-Fi)","Comedia","Acción"],"2000","2 mnts",true,8.5);
    let peli7 = new Pelicula(7,"Terminator",["Acción","Aventura", "Aventura"],"1984","147 mnts",false,7);
    let peli8 = new Pelicula(8,"Lilo & Stitch",["Animación","Comedia"],"2008","120 mnts",true,8.75);
    let peli9 = new Pelicula(9,"Frozen",["Animación","Musical","Comedia"],"2020","160 mnts",true,9.9);
    let peli10 = new Pelicula(10,"Torrente 2",["Comedia","Crimen"],"2000","133 mnts",true,8);

    let anime1 = new Anime(1,"One Piece",["Acción","Aventura","Comedia","Shonen"],"2003","1100 caps",true,9);
    let anime2 = new Anime(2,"School Days",["Terror","Gore","Psicológico"],"2014","24 caps",false,6);
    let anime3 = new Anime(3,"Prision School",["Comedia","Drama"],"2018","24 caps",true,9.5);
    let anime4 = new Anime(4,"Gran Blue",["Comedia"],"2017","24 caps",true,9.4);
    let anime5 = new Anime(5,"Bobobo",["Comedia","Acción","Shonen"],"1995","200 caps",false,7.6);
    let anime6 = new Anime(6,"Keroro",["Comedia"],"1998","300 caps",false,7);
    let anime7 = new Anime(7,"Shin-chan",["Comedia", "Slice of Life"],"1999","600 caps",true,8.8);
    let anime8 = new Anime(8,"Doraemon",["Drama","Aventura","Comedia"],"2001","100 caps",false,7);
    let anime9 = new Anime(9,"Black Clover",["Acción","Aventura","Shonen"],"2019","200 caps",true,9);
    let anime10 = new Anime(10,"Naruto",["Acción","Aventura","Shonen"],"2009","900 caps",true,9);

    biblioteca = new Biblioteca();
    biblioteca.agregarPelicula(peli1);
    biblioteca.agregarPelicula(peli2);
    biblioteca.agregarPelicula(peli3);
    biblioteca.agregarPelicula(peli4);
    biblioteca.agregarPelicula(peli5);
    biblioteca.agregarPelicula(peli6);
    biblioteca.agregarPelicula(peli7);
    biblioteca.agregarPelicula(peli8);
    biblioteca.agregarPelicula(peli9);
    biblioteca.agregarPelicula(peli10);

    biblioteca.agregarAnime(anime1);
    biblioteca.agregarAnime(anime2);
    biblioteca.agregarAnime(anime3);
    biblioteca.agregarAnime(anime4);
    biblioteca.agregarAnime(anime5);
    biblioteca.agregarAnime(anime6);
    biblioteca.agregarAnime(anime7);
    biblioteca.agregarAnime(anime8);
    biblioteca.agregarAnime(anime9);
    biblioteca.agregarAnime(anime10);
    guardarBibliotecaEnLocalStorage(biblioteca);
}