import Component from './Component.js';
import Header from './header.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
    }
    
    renderHTML() {
        return /*html*/`
            <div></div>
        `;
    }
}

export default App;