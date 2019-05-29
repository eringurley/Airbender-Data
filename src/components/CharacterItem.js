import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        if(!character.photoUrl) {
            character.photoUrl = './assets/placeholder.jpg';
        }
        return /*html*/ `
            <li class="character-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
            </li>
        `;  
    }
}

export default CharacterItem;