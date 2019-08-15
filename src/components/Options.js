import Component from './Component.js';

class Options extends Component {
    renderHTML() {
        return /*html*/`
        <div>
            <div>Search</div>
            <div>Sort</div>
        </div>
        `;
    }
}

export default Options;