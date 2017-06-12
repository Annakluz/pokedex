var cargarPagina = function(){
  cargarPokemon();
 // $(document).on("click", ".pokemon", mostrarDetallePokemon);
};

var cargarPokemon = function (){
    var url = "http://pokeapi.co/api/v2/pokemon/"
     $.getJSON(url, function (response) {
        // console.log(response); con esto me da la cantidad de objetos.
        var pokemones = response.results;
        mostrarPokemones(pokemones);
  

    });

};

var mostrarPokemones = function (pokemones){
    var $ul= $("#lista_pokemones");
    pokemones.forEach(function(pokemon){
       //console.log (pokemon.name);
        var $li = $("<li />");
        $li.text(pokemon.name);
        $ul.append($li);
       
        //console.log($li);
    });
}





$(document).ready(cargarPagina);
