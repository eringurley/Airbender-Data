import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        return /*html*/ `
        <li class="character-item">
            <h1>46th Earth King</h1>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        </li>
        `;
    }
}

export default CharacterItem;