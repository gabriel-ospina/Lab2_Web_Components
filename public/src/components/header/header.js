class myHeader extends HTMLElement {

    static get observedAttributes(){
        return["menu", "logo", "search", "notif", "newVid"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/header/header.css">
        <header>
            <div class="start">
                <button style="background-image: url(${this.menu || "https://static.thenounproject.com/png/4700132-200.png"});" class="menu-icon"></button>
                <div style="background-image: url(${this.logo || "https://www.scraapy.com/en/autoparts_images/165907301262e371f40bf89.png"});" class="logo"></div>
            </div>
            <div class="center">
                <input type= "text" "label="Buscar"></form>
                <button style="background-image: url(${this.search || "https://static.thenounproject.com/png/4700132-200.png"});" class="search-icon"></button>
            </div>
            <div class="end">
            <button style="background-image: url(${this.notif || "https://static.thenounproject.com/png/4700132-200.png"});" class="noti-icon"></button>
            <button style="background-image: url(${this.newVid || "https://static.thenounproject.com/png/4700132-200.png"});" class="newVid-icon"></button>
            </div>

        </header>
        `
    }
}

customElements.define("header-bar", myHeader)
export default myHeader