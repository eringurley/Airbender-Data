import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import airbenderApi from '../services/airbender-api.js';

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