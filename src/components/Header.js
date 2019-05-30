import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
        <header>
        <a href="">Back Home</a>
        <h1>The Last Airbender</h1>
        </header>
        `;
    }
}

export default Header;