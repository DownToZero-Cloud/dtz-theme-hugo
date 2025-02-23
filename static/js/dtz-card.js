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
            padding-top: 0.75em;
            padding-bottom: 0.75em;
            margin-block-start: 0;
            margin-block-end: 0;
            font-size: 1.25rem;
        }`);
        styles.insertRule(`.dtz-heading.loading {
            background-color: var(--bs-secondary-bg-subtle);
            transition: background-color 1s, height 1s;
        }`);
        styles.insertRule(`.dtz-card {
            margin: 1em;
            width: 27em;
            border-radius: 2em;
            border: 2px solid var(--dtz-normal);
            overflow: hidden;
        }`);
        return styles;
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.adoptedStyleSheets = [this.styles()];
        let title = this.getAttribute('title');
        let loading = this.getAttribute('loading');
        let title_str = title ? `<h5 class="dtz-heading ${loading ? 'loading' : ''}">${title}</h5>` : '';
        let spinner = loading ? `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`: "";
        shadow.innerHTML = `<div class="dtz-card">
            ${title_str}
            <div style="margin: 1em;">${spinner}<slot></slot></div>
        </div>`;
    }
}
window.customElements.define('dtz-card', DtzCard);
