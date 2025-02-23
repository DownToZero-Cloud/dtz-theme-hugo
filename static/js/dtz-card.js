class DtzCard extends HTMLElement {
    constructor() {
        super();
    }
    async connectedCallback() {
        let title = this.getAttribute('title');
        this.innerHTML = `<div class="dtz-card">
            ${title ? `<h5 class="dtz-heading">${title}</h5>` : ''}
            <div style="margin: 1em;>
            <slot></slot>
            </div>
        </div>`;
    }
}
window.customElements.define('dtz-card', DtzCard);
