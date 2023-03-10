import * as components from './components/index.js'
import dataTag from "./components/Data/dataTag.js"
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        let varTag = "";
        dataTag.forEach(user => {
            varTag += `
            <custom-tag tag="${user.tag}"></custom-tag>
            `
        });
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./src/style.css">
        <nav>
        `+ varTag +`
        </nav>
        <section class="nm-section">
            <nav-menu selected="#ffffff17" icon="https://media.discordapp.net/attachments/1010976865424506900/1083289685327089695/Frame_1.png?width=30&height=30" page="Principal"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684911849492/Frame_6.png?width=30&height=30" page="Shorts"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684223983677/Frame_3.png?width=30&height=30" page="Suscripciones"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684911849492/Frame_6.png?width=30&height=30" page="Biblioteca"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684467261440/Frame_4.png?width=30&height=30" page="Historial"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684911849492/Frame_6.png?width=30&height=30" page="Tus videos"></nav-menu>
            <nav-menu  icon="https://media.discordap.net/attachments/1010976865424506900/1083289684467261440/Frame_4.png?width=30&height=30" page="Ver más tarde"></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289685113184256/Frame_7.png?width=30&height=30" page="Videos que me gus..."></nav-menu>
            <nav-menu  icon="https://media.discordapp.net/attachments/1010976865424506900/1083289684693749770/Frame_5.png?width=30&height=30" page="Favs"></nav-menu>
            </section>
        <section class="vc-section">
            <video-card thumbnail="https://www.eltiempo.com/files/article_main_1200/uploads/2023/02/24/63f875c2105d7.png" title="KAROL G, Shakira - TQG (Official Video)" views="166 M de vistas" channel="https://yt3.googleusercontent.com/Js_Ip-lezgP0XmjUzTLsHPUN9HVBn1vMeYnx12ApUPVfSPSIBiZ2OEAMlXM86USsGv38PsCnfQ=s176-c-k-c0x00ffffff-no-rj" user="KAROL G" date="hace 11 días"></video-card>
            <video-card thumbnail="https://i.ytimg.com/vi/F7DH1Zj1SEU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFUoUzAP&rs=AOn4CLA3D8AFyp1GOPRb_2ae_W4OMDxztA" title="Ava Max - Weapons (Official Visualizer)" views="440,014" channel="https://yt3.googleusercontent.com/JDgeKlqRrdRnPvrL0YoMSJedqWGocVnTkmoK9URQpHm0cDbbz05qrbrX3NYLMo3ccbS2Z11V=s176-c-k-c0x00ffffff-no-rj" user="Ava Max" date="hace 3 días"></video-card>
            <video-card thumbnail="https://i.ytimg.com/vi/F7DH1Zj1SEU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFUoUzAP&rs=AOn4CLA3D8AFyp1GOPRb_2ae_W4OMDxztA" title="Ava Max - Weapons (Official Visualizer)" views="440,014" channel="https://yt3.googleusercontent.com/JDgeKlqRrdRnPvrL0YoMSJedqWGocVnTkmoK9URQpHm0cDbbz05qrbrX3NYLMo3ccbS2Z11V=s176-c-k-c0x00ffffff-no-rj" user="Ava Max" date="hace 3 días"></video-card>
            <video-card thumbnail="https://i.ytimg.com/vi/F7DH1Zj1SEU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFUoUzAP&rs=AOn4CLA3D8AFyp1GOPRb_2ae_W4OMDxztA" title="Ava Max - Weapons (Official Visualizer)" views="440,014" channel="https://yt3.googleusercontent.com/JDgeKlqRrdRnPvrL0YoMSJedqWGocVnTkmoK9URQpHm0cDbbz05qrbrX3NYLMo3ccbS2Z11V=s176-c-k-c0x00ffffff-no-rj" user="Ava Max" date="hace 3 días"></video-card>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer);