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
        <link rel="stylesheet" href="./src/style.css">
        <video-card thumbnail="https://www.eltiempo.com/files/article_main_1200/uploads/2023/02/24/63f875c2105d7.png" title="Holi"></video-card>
        <video-card thumbnail="https://i.ytimg.com/vi/F7DH1Zj1SEU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFUoUzAP&rs=AOn4CLA3D8AFyp1GOPRb_2ae_W4OMDxztA" title="Ava Max - Weapons (Official Visualizer)"></video-card>
        `;
    }
}

customElements.define('app-container', AppContainer);