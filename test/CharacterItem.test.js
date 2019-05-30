import CharacterItem from '../src/components/CharacterItem.js';
const test = QUnit.test;
QUnit.module('create character item');

test('create character item DOM', assert => {
    //arrange
    const character = {
        name: '46th Earth King',
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441'
    };

    //act
    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, /*html*/ `
    <li class="character-item">
        <h2>46th Earth King</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        <a href="#enemies=46th+Earth+King">Enemies</a> <a href="#allies=46th+Earth+King">Allies</a> 
    </li>
    `);
});

// test('return with placeholder image', assert => {
//     //arrange
//     const character = {
//         'name': 'Guri'  
//     };

//     //act
//     const characterItem = new CharacterItem({ character });
//     const actual = characterItem.renderTemplate();
    
//     //assert
//     assert.htmlEqual(actual, /*html*/ `
//         <li>
//             <h2>Guri</h2>
//             <img src="./assets/placeholder.jpg" id="placeholder" alt="Guri">
//         </li>
//     `);
// });