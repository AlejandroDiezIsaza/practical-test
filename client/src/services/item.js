const BASE_API = 'http://localhost:3200/api';

export const searchItemsByQuery = async ({ query }) => {
    return fetch(`${BASE_API}/items?q=${query}`)
        .then(value => value.json());
};

export const getItemById = async (id) => {
    return fetch(`${BASE_API}/items/${id}`)
        .then(value => value.json());
};
