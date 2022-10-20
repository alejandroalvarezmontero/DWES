import fetch from 'node-fetch';

const dittoP = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const bulbasaurP = fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
const pikachuP = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

const responses = await Promise.all([dittoP, bulbasaurP, pikachuP]);

const array = responses.map(async r => {
    const pokemon = r.json();
    return pokemon.name;
});
console.log(array);
