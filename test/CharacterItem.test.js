import CharacterItem from '../src/components/CharacterItem.js';
const test = QUnit.test;
QUnit.module('create character item');

test('create character item DOM', assert => {
    //arrange
    const character = {
        character: '46th Earth King',
        image: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King'
    };

    //act
    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, /*html*/ `
    <li class="character-item">
        <h1>46th Earth King</h1>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
    </li>
    `);
});