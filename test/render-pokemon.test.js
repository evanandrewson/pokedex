import PokemonItem from '../src/components/PokemonItem.js';


const test = QUnit.test;

QUnit.module('render pokemon html');

test('test name', assert => {
    // arrange
    const pokemon = {
        _id: '5cef3501ef6005a77cd4fd16',
        pokemon: 'venusaur',
        id: 3,
        species_id: 3,
        height: 20,
        weight: 1000,
        base_experience: 236,
        type_1: 'grass',
        type_2: 'poison',
        attack: 82,
        defense: 83,
        hp: 80,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
        ability_1: 'overgrow',
        ability_2: 'NA',
        ability_hidden: 'chlorophyll',
        color_1: '#78C850',
        color_2: '#A040A0',
        color_f: '#81A763',
        egg_group_1: 'monster',
        egg_group_2: 'plant',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        generation_id: 1,
        evolves_from_species_id: '2',
        evolution_chain_id: 1,
        shape_id: 8,
        shape: 'quadruped',
        pokebase: 'venusaur',
        pokedex: 'http://www.pokemon.com/us/pokedex/venusaur',
    };

    const expected = `
        <div class="pokemon">
            <h2>venusaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png">
            <p>Attack: 82</p>
            <p>Defense: 83</p>
            <p>Type: grass</p>
        </div>
    `;
        
    // act
    const props = { pokemon: pokemon };
    const pokemonItem = new PokemonItem(props);
    const html = pokemonItem.renderHTML();

    
    // assert
    assert.htmlEqual(html, expected);
});