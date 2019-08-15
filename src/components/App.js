import Component from './Component.js';
import Header from './header.js';
import Options from './Options.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = new Options();
        const optionsDOM = options.renderDOM();
        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(optionsDOM);

    }
    
    renderHTML() {
        return /*html*/`
        <div>
            <main>    
                <section class="options-section"></section>
            </main>
        </div>
        `;
    }
}

export default App;