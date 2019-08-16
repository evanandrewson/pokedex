const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokedex(options) {
    const page = options.page;
    const search = options.search;

    const url = `${URL}?page=${page || 1}&perPage=20&pokemon=${search || ''}`;

    return fetch(url)
        .then(response => response.json())
        .then(results => {
            return {
                results: results
            };
        });
}