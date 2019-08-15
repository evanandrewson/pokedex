import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <img src="./assets/Pokemon-logo.png" alt="Pokemon logo">
            <h1>Pokédex</h1>
        </header>
        `;
    }
}

export default Header;