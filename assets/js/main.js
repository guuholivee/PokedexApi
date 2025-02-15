//requisicção http em js
const pokemonList = document.getElementById(`pokemonList`)
const loadMoreButton =document.getElementById(`loadMoreButton`)

const maxRecords = 151
const limit = 20
let offset = 0;




function loadPokemonItens(offset, limit ){
   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}"> 
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                        
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type)=>`<li class ="type${type}">${type}</li>`).join(``)}
                    </ol>
        
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join(``)

        pokemonList.innerHTML += newHtml
    }) 
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener(`click`, () =>{
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords){
        const  newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    }else {
        loadPokemonItens(offset, limit)
    }   

    
})


//comentarios de estudos

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

// todo o "for" feito abaixo foi feito nesta linha de map
   
/* for para  conversao de dados do api para  html
const listItens =[]

    
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItens.push(convertPokemonToLi(pokemon))
          
    } 
      console.log(listItens)*/