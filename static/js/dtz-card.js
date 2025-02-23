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
        return `<style>
        .dtz-heading {
            background-color: var(--dtz-light);
            text-align: center;
        }
        .dtz-heading.loading {
            background-color: var(--bs-secondary);
        }
        .dtz-card {
            margin: 1em;
            width: 27em;
            border-radius: 2em;
            padding: 1em;
            border: 2px solid var(--dtz-normal);
        }
        </style>`;
    }
    connectedCallback() {
        let title = this.getAttribute('title');
        let loading = this.getAttribute('loading');
        this.innerHTML = this.styles() + `<div class="dtz-card">
            ${title ? `<h5 class="dtz-heading ${loading ? 'loading' : ''}">${title}</h5>` : ''}
            <div style="margin: 1em;>
            <slot></slot>
            </div>
        </div>`;
    }
}
window.customElements.define('dtz-card', DtzCard);
