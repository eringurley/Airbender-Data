import htmlToDOM from '../src/services/html-to-DOM.js';
const test = QUnit.test;

QUnit.module('html to DOM');

test('converts html to DOM', (assert) => {
    // Arrange
    const html = /*html*/`
        <span>test</span>
    `;

    // Act
    const dom = htmlToDOM(html);

    // Assert
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});