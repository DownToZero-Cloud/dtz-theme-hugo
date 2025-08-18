export class DtzAccessControl extends HTMLElement {
    #state = 'red-state';

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`:host {
            display: inline-block;
        }`);
        styles.insertRule(`:host([state="red-state"]) {
            --background-color: hsl(354, 70%, 83%);
            --border-color: hsl(354, 70%, 63%);
        }`);
        styles.insertRule(`:host([state="yellow-state"]) {
            --background-color: hsl(45, 100%, 85%);
            --border-color: hsl(45, 100%, 55%);
        }`);
        styles.insertRule(`:host([state="green-state"]) {
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
            display: grid;
            grid-template-columns: auto 1fr 1fr 1fr;
        }`);
        styles.insertRule(`.root.two-state {
            grid-template-columns: auto 1fr 1fr;
        }`);
        styles.insertRule(`.option {
            cursor: pointer;
            text-transform: uppercase;
            border-right: 2px solid var(--border-color);
            display: inline-block;
            text-align: center;
            transition: border-color 4s;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }`);
        styles.insertRule(`.option.active {
            font-weight: bold;
        }`);
        styles.insertRule(`.option:last-child {
            border-right: 0;
        }`);
        styles.insertRule(`.root.two-state .option:nth-child(3) {
            display: none;
        }`);
        return styles;
    }
    changeState(state) {
        this.#state = state;
        this.shadow.querySelector(".option.active")?.classList.remove("active");
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
          <slot name="red" class="option ${this.#state == 'red-state' ? 'active' : ''}" data-state="red-state"></slot>
          <slot name="yellow" class="option ${this.#state == 'yellow-state' ? 'active' : ''}" data-state="yellow-state"></slot>
          <slot name="green" class="option ${this.#state == 'green-state' ? 'active' : ''}" data-state="green-state"></slot>
        </div>`;
        this.shadow.querySelector(`.option[data-state="red-state"]`).addEventListener('click', (event) =>{
            event.preventDefault();
            this.changeState("red-state");
        });
        this.shadow.querySelector(`.option[data-state="yellow-state"]`).addEventListener('click', (event) =>{
            event.preventDefault();
            this.changeState("yellow-state");
        });
        this.shadow.querySelector(`.option[data-state="green-state"]`).addEventListener('click', (event) =>{
            event.preventDefault();
            this.changeState("green-state");
        });

        const hasInitialContent = this.shadow.querySelector(`.option[data-state="yellow-state"]`).assignedNodes().some(node =>
            node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')
        );
        if(!hasInitialContent) {
            this.shadow.querySelector(".root").classList.add("two-state");
        }
    }
}
window.customElements.define('dtz-access-control', DtzAccessControl);
