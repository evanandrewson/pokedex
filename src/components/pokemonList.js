import Component from './Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    onRender(dom) {
        const pokemon = this.props.pokemon;
        pokemon.results.forEach(element => {
            const props = { pokemon: element };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
    
    renderHTML() {
        return /*html*/`
            <ul class="pokedex"></ul>
        `;
    }
}

export default PokemonList;