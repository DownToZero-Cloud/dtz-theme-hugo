class DtzCard extends HTMLElement {
    constructor() {
        super();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'loading') {
            if (newValue) {
                this.querySelector("h5").classList.add("loading");
            } else {
                this.querySelector("h5").classList.remove("loading");
            }
        }
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`.dtz-heading {
            background-color: var(--dtz-light);
            text-align: center;
        }`);
        styles.insertRule(`.dtz-heading.loading {
            background-color: var(--bs-secondary);
        }`);
        styles.insertRule(`.dtz-card {
            margin: 1em;
            width: 27em;
            border-radius: 2em;
            border: 2px solid var(--dtz-normal);
        }`);
        return styles;
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.adoptedStyleSheets = [this.styles()];
        let title = this.getAttribute('title');
        let loading = this.getAttribute('loading');
        shadow.innerHTML = `<div class="dtz-card">
            ${title ? `<h5 class="dtz-heading ${loading ? 'loading' : ''}">${title}</h5>` : ''}
            <div style="margin: 1em;">
            <slot></slot>
            </div>
        </div>`;
    }
}
window.customElements.define('dtz-card', DtzCard);
