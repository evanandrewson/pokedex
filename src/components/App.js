import Component from './Component.js';
import Header from './header.js';
import Options from './Options.js';
import PokemonList from './pokemonList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = new Options();
        const optionsDOM = options.renderDOM();
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(optionsDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        let pokemonListDOM;
        let pokemonList;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokemonList = new PokemonList({ pokemon : data });
                pokemonListDOM = pokemonList.renderDOM();
                const pokedex = dom.querySelector('.pokedex');
                pokedex.appendChild(pokemonListDOM);
            });

    }
    renderHTML() {
        return /*html*/`
        <div>
            <main>    
                <section class="options-section"></section>
                <section class="pokedex"></section>
            </main>
        </div>
        `;
    }
}

export default App;