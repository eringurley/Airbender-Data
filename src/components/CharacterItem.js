import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        
        if(!character.photoURL) {
            character.photoURL = '../../../assets/placeholder.jpg';
        }
        return /*html*/ `
            <li class="character-item">
                <h1>${character.name}</h1>
                <img src="${character.photoURL}" alt="${character.name}">
            </li>
        `;
    }
}

export default CharacterItem;