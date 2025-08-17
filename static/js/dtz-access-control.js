export class DtzAccessControl extends HTMLElement {
    #state = 'no-access';

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`:host {
            display: inline-block;
        }`);
        styles.insertRule(`:host([state="no-access"]) {
            --background-color: hsl(354, 70%, 83%);
            --border-color: hsl(354, 70%, 63%);
        }`);
        styles.insertRule(`:host([state="read-only"]) {
            --background-color: hsl(45, 100%, 85%);
            --border-color: hsl(45, 100%, 55%);
        }`);
        styles.insertRule(`:host([state="write"]) {
            --background-color: hsl(105, 100%, 90%);
            --border-color: hsl(105, 100%, 30%);
        }`);
        styles.insertRule(`.label {
            padding-right: 0.25rem;
        }`);
        styles.insertRule(`.root {
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            background-color: var(--background-color);
            transition: border-color 4s, background-color 4s;
        }`);
        styles.insertRule(`.option {
            cursor: pointer;
            text-transform: uppercase;
            width: 6.5rem;
            border-right: 2px solid var(--border-color);
            display: inline-block;
            text-align: center;
            transition: border-color 4s;
        }`);
        styles.insertRule(`.option.active {
            font-weight: bold;
        }`);
        styles.insertRule(`.option:last-child {
            border-right: 0;
        }`);
        return styles;
    }
    changeState(event) {
        let state = event.target.dataset.state;
        this.#state = state;
        this.shadow.querySelector(".option.active").classList.remove("active");
        this.shadow.querySelector(`.option[data-state="${state}"]`).classList.add("active");
        this.setAttribute('state', state);
        this.dispatchEvent(new CustomEvent('valueChanged', { detail: state }));
    }
    connectedCallback() {
        this.setAttribute('state', this.#state);
        let shadow = this.shadow;
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<div class="root">
          <span class="label"><slot></slot></span>
          <span class="option ${this.#state == 'no-access' ? 'active' : ''}" data-state="no-access">
            No Access
          </span>
          <span class="option ${this.#state == 'read-only' ? 'active' : ''}" data-state="read-only">
            Read Only
          </span>
          <span class="option ${this.#state == 'write' ? 'active' : ''}" data-state="write">
            Write
          </span>
        </div>`;
        this.shadow.querySelectorAll(".option").forEach(option => {
            option.addEventListener('click', this.changeState.bind(this));
        });
    }
}
window.customElements.define('dtz-access-control', DtzAccessControl);
