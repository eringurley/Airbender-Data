import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const done = this.props.loading;
        if(!done) {
            return /*html*/ `
                <div></div>
            `;
        }

        return /*html*/ `
            <div class="loading">
                <img src="./assets/loading.gif" alt="loading">
            </div>
        `;
    }
}
export default Loading;