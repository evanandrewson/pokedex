import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class Paging extends Component {
    onRender(dom) {
        const previousButton = dom.querySelector('.previous');
        const nextButton = dom.querySelector('.next');

        let currentPage = this.props.currentPage || 1;

        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }

        previousButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }
    
    renderHTML() {
        const currentPage = this.props.currentPage || 1;
        const perPage = 20;
        const totalCount = this.props.totalCount;

        // if(!totalCount) {
        //     return /*html*/`
        //     <p class="paging">No results, try again</p> 
        // `;
        // }
        
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/`
            <p class="paging">
                <button class="previous" ${currentPage === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>▶</button>
            </p> 
        `;
    }
}

export default Paging;