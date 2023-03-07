class videoCard extends HTMLElement {

    static get observedAttributes() { //Escucha los cammbios en el attributeChangedCallback
        return ["thumbnail", "title", "views", "date", "channel", "user", "length"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() { //Escucha cuando se monta el componente
        this.render();
    }

    attributeChangedCallback(propName, oldValue , newValue){ //Escucha los cambios en el componente
        this[propName] = newValue;
        this.render();
    } 
    
    render(){
        if(!this.shadowRoot)
        return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/videoCard/card.css">
        <div style="background-image: url(${this.thumbnail || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"});" class="video-image"></div>
        <span class="v-main-elements">
        <div style="background-image: url(${this.channel || "https://magapor.com/wp-content/uploads/2022/10/USER.png"});" class="user-image"></div>
        <div class="video-content">
        <p class="video-title">${this.title || "videoName"}</p>
        </span>
        <span class="v-detail-elements"><p class="smaller-text">${this.user || "ChannelName"}</p><p class="smaller-text">${this.views || "No views"} • ${this.date || "empty"}</p></span>
        </div>
        `
    }
}

customElements.define('video-card', videoCard);
export default videoCard;







//|| "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"
//|| "Default"