function PokemonController()
{
        var pkService = new PokemonService()


var this.blarg = 'blarg'

    var pokeElem = document.getElementById("pokemon-results")

    function draw(response)
    {
        console.log("drawing pokemons")
            pokeElem.innerHTML='';

            var template = ''
            response.results.forEach((p) => {console.log(this.blarg)
            template += `<div>${p.name}</div>`            
            
        
    }) 

    pokeElem.innerHTML = template;

    }

    //pokemon.forEach(fucntion(p){code goes here}.bind(this)) <-- review this!
    //What this does is put this of the outer scope inside the anoynouse funciton.
    //you can use a fat arrow to accomplish as well.


//draw([{name:'a fake p'},{name:'a fake p'}])

    console.log('getting Pokemons')
    pkService.getPokemons('http://pokeapi.co/api/v2/', draw)
    
    this.next = function(direction)
    {
        
    }


}