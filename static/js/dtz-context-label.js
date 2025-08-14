export class DtzContextLabel extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`label {
            border: 1px solid var(--dtz-normal);
            border-radius: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }`);
        styles.insertRule(`dtz-clipboard {
            margin-left: 0.25rem;
        }`);
        styles.insertRule(`label svg {
            margin-bottom: -0.125rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }`);
        styles.insertRule(`dtz-clipboard {
            margin-bottom: -0.5rem;
        }`);
        return styles;
    }
    async connectedCallback() {
        let shadow = this.shadow;
        let icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"/>
</svg>`;
        shadow.adoptedStyleSheets = [this.styles()];
        let contextId = this.getAttribute("contextId");
        let alias = this.getAttribute("alias");
        shadow.innerHTML = `<label class="boxed"> ${icon} ${alias} - ${contextId} <dtz-clipboard class="minimal">${contextId}</dtz-clipboard></label>`;
    }
}
window.customElements.define('dtz-context-label', DtzContextLabel);
