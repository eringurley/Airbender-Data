import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import airbenderApi from '../services/airbender-api.js';
import Loading from './Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);

        const characterList = new CharacterList({ characters: [] });
        main.appendChild(characterList.render());
        
        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());
        
        function loadCharacters() {
            const params = window.location.hash.slice(1);
            airbenderApi.getCharacters(params)
                .then(characters => {
                    characterList.update({ characters });
                })
                .catch(err => {
                    console.log(err);   
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }
        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
                <div>
                    <main>
                    </main>
                </div>
        `;
    }
}

export default App;