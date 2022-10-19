import fetch from 'node-fetch';

/*const dittoP = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const bulbasaurP = fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
const pikachuP = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
*/

async function start(){

    try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json()
    console.log(data.name);
    } catch(error) {
    console.error('Error:', error.message);
    }
}