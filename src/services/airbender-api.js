const URL = 'http://last-airbender-api.herokuapp.com/api/v1/characters';

const airbenderApi = {
    getCharacters() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default airbenderApi; 