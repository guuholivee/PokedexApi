


const pokeApi = {}


function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    return pokemon
}

pokeApi.getpokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)

   
}

pokeApi.getPokemons = (offset = 0, limit = 5) =>{
    //requisicção http em js dos poquemons
    const url =`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getpokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
            
    }


/*transformar a lista acima em novas requisições!!!
Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/1`),
    fetch(`https://pokeapi.co/api/v2/pokemon/2`),
    fetch(`https://pokeapi.co/api/v2/pokemon/3`),
    fetch(`https://pokeapi.co/api/v2/pokemon/4`),
]).then((results) => {
    console.log (results)
})*/