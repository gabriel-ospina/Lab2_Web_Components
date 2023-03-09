class myTags extends HTMLElement{

    static get observedAttributes() {
        return ["tag"]
    }

    constructor () {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <P>${this.message || "crazy in love"} </P>
        `;
    }
}

customElements.define('custom-tag', myTags)
export default myTags;