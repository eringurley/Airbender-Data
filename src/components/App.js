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

        airbenderApi.getCharacters()
            .then(characters => {
                characterList.update({ characters }); 
            })
            .finally(() => {
                loading.update({ done: true });
            });

        const loading = new Loading({ done:false });
        const loadingDOM = loading.render();
        main.appendChild(loadingDOM);
        
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