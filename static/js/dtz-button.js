class DtzButton extends HTMLElement {
    constructor() {
        super();
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`button {
            cursor: pointer;
            display: inline-block;
            padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
            font-family: var(--bs-btn-font-family);
            font-size: var(--bs-btn-font-size);
            font-weight: var(--bs-btn-font-weight);
            line-height: var(--bs-btn-line-height);
            color: var(--bs-btn-color);
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            user-select: none;
            border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
            border-radius: var(--bs-btn-border-radius);
            background-color: var(--bs-btn-bg);
            transition: color .15sease-in-out, background-color .15sease-in-out, border-color .15sease-in-out, box-shadow .15sease-in-out;
        }`);
        styles.insertRule(`button:hover {
            color: var(--bs-btn-hover-color);
            background-color: var(--bs-btn-hover-bg);
            border-color: var(--bs-btn-hover-border-color);
        }`);
        styles.insertRule(`:host {
            --bs-btn-color: #0d6efd;
            --bs-btn-border-color: var(--dtz-normal);
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: #0d6efd;
            --bs-btn-hover-border-color: #0d6efd;
            --bs-btn-focus-shadow-rgb: 13, 110, 253;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #0d6efd;
            --bs-btn-active-border-color: #0d6efd;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-disabled-color: #0d6efd;
            --bs-btn-disabled-bg: transparent;
            --bs-btn-disabled-border-color: #0d6efd;
            --bs-gradient: none;
            --bs-btn-padding-x: 0.75rem;
            --bs-btn-padding-y: 0.375rem;
            --bs-btn-font-family: ;
            --bs-btn-font-size: 1rem;
            --bs-btn-font-weight: 400;
            --bs-btn-line-height: 1.5;
            --bs-btn-color: var(--bs-body-color);
            --bs-btn-bg: transparent;
            --bs-btn-border-width: var(--bs-border-width);
            --bs-btn-border-color: transparent;
            --bs-btn-border-radius: var(--bs-border-radius);
            --bs-btn-hover-border-color: transparent;
            --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
            --bs-btn-disabled-opacity: 0.65;
            --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
        }`);
        styles.insertRule(`:host.outline {
            --bs-btn-color: white;
            --bs-btn-hover-color: var(--dtz-normal);
        }`);
        return styles;
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<button><slot></slot></button>`;
    }
}
window.customElements.define('dtz-button', DtzButton);
