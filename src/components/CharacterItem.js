import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', character.name);

        const allyLink = new URLSearchParams();
        allyLink.set('allies', character.name);

        if(!character.photoUrl) {
            character.photoUrl = './assets/placeholder.jpg';
        }
        return /*html*/ `
            <li class="character-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
                <a href="#${enemyLink.toString()}">Enemies</a>
                <a href="#${allyLink.toString()}">Allies</a>
            </li>
        `;  
    }
}

export default CharacterItem;