//requisicção http em js
const offset = 0
const limit = 10
const url =`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

//uma promessa que vai retornar o que foi pedido
/*fetch(url)
    .then(function (response) {
        return response.json()
            
    })

    .then(function (jsonBody){
        console.log(jsonBody)  
    })
    
            //caso de erro 
    .catch(function(error){
        console.error(error)
    })

    //continuar idependende do erro ou se deu certo
    .finally(function() {
        console.log(`Requiosição concluida!`)
    })
 */

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon"> 
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type)=>`<li class ="type">${type}</li>`).join(``)}
                </ol>

                <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            </div>
        </li>`
}

const pokemonList = document.getElementById(`pokemonList`)

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join(``)
    pokemonList.innerHTML = newHtml
     // todo o "for" feito abaixo foi feito nesta linha de map
})   
   
/* for para  conversao de dados do api para  html
const listItens =[]

    
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(convertPokemonToLi(pokemon))
          
    } 
      console.log(listItens)*/

 
