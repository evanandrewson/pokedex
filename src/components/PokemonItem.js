import Component from './Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
        <div class="pokemon">
            <h2>${pokemon.pokemon}</h2>
            <img src="${pokemon.url_image}">
            <p>Attack: ${pokemon.attack}</p>
            <p>Defense: ${pokemon.defense}</p>
            <p>Type: ${pokemon.type_1}</p>
        </div>
        `;
    }
}

export default PokemonItem;