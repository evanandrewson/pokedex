import Component from './Component.js';
import Header from './header.js';
import Options from './Options.js';
import PokemonList from './pokemonList.js';
import Paging from './Paging.js';
import { getPokedex } from '../services/pokedex-api.js';
import hashStorage from '../services/hash-storage.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = new Options();
        const optionsDOM = options.renderDOM();
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(optionsDOM);

        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        optionsSection.appendChild(pagingDOM);

        let pokemonListDOM;
        let pokemonList = new PokemonList({ pokemon: [] });
        pokemonListDOM = pokemonList.renderDOM();
        const pokedex = dom.querySelector('.pokedex');
        pokedex.appendChild(pokemonListDOM);
        function loadPokedex() {
            const options = hashStorage.get();
            getPokedex(options)
                .then(data => {
                    pokemonList.update({ pokemon : data.results.results });
                    const totalCount = data.results.count;
                    paging.update({
                        totalCount,
                        currentPage: +options.page
                    });
                });
        }
        loadPokedex();

        window.addEventListener('hashchange', () => {
            loadPokedex();
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