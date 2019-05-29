import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;
        if(character.photoUrl) {
            return /*html*/ `
            <li class="character-item">
                <h2>${character.name}</h2>
                <img src="${character.photoURL}" alt="${character.name}">
            </li>
        `;
        }
        // else if(!character.photoURL)
        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="./assets/placeholder.jpg" id="placeholder" alt="${character.name}">
            </li>
        `;  
    }
}

export default CharacterItem;