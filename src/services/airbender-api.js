const URL = 'http://last-airbender-api.herokuapp.com/api/v1/characters';

const airbenderApi = {
    getCharacters(search) {
        let url = URL;

        url = `${URL}?${search}`;
        
        
        return fetch(url)
            .then(response => response.json());
    }
};

export default airbenderApi; 