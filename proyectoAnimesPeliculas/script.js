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
    filtrarPorGeneros(generos,tipo){ // tipo debe ser pelicula o anime
        let res = [];
        this[`lista${tipo.charAt(0).toUpperCase()+tipo.toLowerCase().slice(1)}}s`]
            .forEach(element => {
                if (element.some(e => generos.includes(e))){ 
                    /////// NO SE SI LO DE ARRIBA FUNCIONA
                    res.push(element);
                }
        });
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