function PokmonService()
{
    var baseURL = "http://pokeapi.co/api/v2/"
    var currentPage;

    this.getCurrentPage = function()
    {
        return curentPage;
    }


    this.getPokemons = function(url,cb)
    {
            if (typeof cb != 'function')
            {return console.error('You Shall Not Pass without a callback function')}


            $.get(url).then(cb)
    }

}