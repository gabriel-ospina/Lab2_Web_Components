var cardAttributes;
(function (cardAttributes){
    cardAttributes["thumbnail"] = "thumbnail";
    cardAttributes["title"] = "title";
    cardAttributes["views"] = "views"
    cardAttributes["date"] = "date"
})(cardAttributes || (cardAttributes = {}));

class videoCard extends HTMLElement {

    static get observedAttributes() { //Escucha los cammbios en el attributeChangedCallback
        return Object.keys(cardAttributes);
    }

    constructor(){
        super();
        this.thumbnail = '';
        this.title = '';
        this.views = '';
        this.date = '';
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
        <img src="${this.thumbnail || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"}" class="v-image"></img>
        <p>${this.title || "videoName"}</p>
        <p>${this.views || "..."}</p>
        <p>${this.date || "empty"}</p>
        `
    }
}

customElements.define('video-card', videoCard);
export default videoCard;







//|| "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"
//|| "Default"