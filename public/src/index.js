import * as components from './components/index.js'
import dataTag from "./components/Data/dataTag.js"
import dataVideoCard from './components/Data/dataVCard.js';
import dataMenu from './components/Data/dataMenu.js';
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
        dataTag.forEach(tag => {
            varTag += `
            <custom-tag tag="${tag.tag}"></custom-tag>
            `
        });

        let varVidCard = "";
        dataVideoCard.forEach(vidCard => {
            varVidCard += `
            <video-card thumbnail=${vidCard.thumbnail} title='${vidCard.title}' views='${vidCard.views}' channel='${vidCard.channel}' user='${vidCard.user}' date='${vidCard.date}'></video-card>
            `
        })

        let varMenu = "";
        dataMenu.forEach(menuButton => {
            varMenu += `
            <nav-menu selected=${menuButton.selected} icon=${menuButton.icon} page='${menuButton.page}'></nav-menu>
            `
        })


        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./src/style.css">
        <header-bar menu="https://cdn.discordapp.com/attachments/1010976865424506900/1083684109890617355/Frame_10.png" logo="https://cdn.discordapp.com/attachments/1010976865424506900/1083684109370544188/Frame_14.png" search= "https://cdn.discordapp.com/attachments/1010976865424506900/1083684109638963320/Frame_9.png" notif="https://media.discordapp.net/attachments/1010976865424506900/1083684108883988490/Frame_12.png?width=30&height=30" newVid= "https://media.discordapp.com/attachments/1010976865424506900/1083684109106282506/Frame_13.png"></header-bar>
        <section class="big-container">
            <section class="nm-section">
                `+ varMenu +`
            </section>
            <section class="recomended">
                <nav>
                    `+ varTag +`
                </nav>
                <section class="vc-section">
                    `+ varVidCard +`
                </section>
            </section>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer);