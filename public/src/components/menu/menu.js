class navMenu extends HTMLElement{
    static get observedAttributes(){
        return["icon", "page", "selected"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }



    render(){
        if(!this.shadowRoot)
        return
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/menu/menu.css">
        <button style="background-color: ${this.selected || "transparent"};"><div style="background-image: url(${this.icon || "https://static.thenounproject.com/png/4700132-200.png"});" class="nav-icon"></div><p class="nav-button-name">${this.page || "NoName"}</p></button>
        `;
    }
}

customElements.define("nav-menu", navMenu);
export default navMenu;