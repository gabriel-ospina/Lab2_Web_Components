import * as components from './components/index.js'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
        <video-card thumbnail="https://www.eltiempo.com/files/article_main_1200/uploads/2023/02/24/63f875c2105d7.png" title="Holi"></video-card>
        `;
    }
}

customElements.define('app-container', AppContainer);