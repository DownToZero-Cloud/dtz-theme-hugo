export class DtzButton extends HTMLElement {
    static formAssociated = true;
    constructor() {
        super();
        this.internals = this.attachInternals();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`button {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
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
        styles.insertRule(`.btn.disabled, button:disabled {
            color: var(--bs-btn-disabled-color);
            pointer-events: none;
            background-color: var(--bs-btn-disabled-bg);
            border-color: var(--bs-btn-disabled-border-color);
            opacity: var(--bs-btn-disabled-opacity);
        }`);
        styles.insertRule(`:host {
            --bs-btn-color: var(--dtz-normal);
            --bs-btn-border-color: var(--dtz-normal);
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: var(--dtz-normal);
            --bs-btn-hover-border-color: var(--dtz-normal);
            --bs-btn-focus-shadow-rgb: 13, 110, 253;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: var(--dtz-normal);
            --bs-btn-active-border-color: var(--dtz-normal);
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-disabled-color: var(--dtz-normal);
            --bs-btn-disabled-bg: transparent;
            --bs-btn-disabled-border-color: var(--dtz-normal);
            --bs-gradient: none;
            --bs-btn-padding-x: 0.75rem;
            --bs-btn-padding-y: 0.375rem;
            --bs-btn-font-family: ;
            --bs-btn-font-size: 1rem;
            --bs-btn-font-weight: 400;
            --bs-btn-line-height: 1.5;
            --bs-btn-bg: transparent;
            --bs-btn-border-width: 1px;
            --bs-btn-border-radius: 0.375rem;
            --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
            --bs-btn-disabled-opacity: 0.65;
            --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
            display: inline-block;
        }`);
        styles.insertRule(`:host(.secondary) {
            --bs-btn-color: #6c757d;
            --bs-btn-border-color: #6c757d;
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: #6c757d;
            --bs-btn-hover-border-color: #6c757d;
            --bs-btn-focus-shadow-rgb: 108, 117, 125;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #6c757d;
            --bs-btn-active-border-color: #6c757d;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-disabled-color: #6c757d;
            --bs-btn-disabled-bg: transparent;
            --bs-btn-disabled-border-color: #6c757d;
            --bs-gradient: none;
        }`);
        styles.insertRule(`:host(.danger) {
            --bs-btn-color: #dc3545;
            --bs-btn-border-color: #dc3545;
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: #dc3545;
            --bs-btn-hover-border-color: #dc3545;
            --bs-btn-focus-shadow-rgb: 220, 53, 69;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #dc3545;
            --bs-btn-active-border-color: #dc3545;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-disabled-color: #dc3545;
            --bs-btn-disabled-bg: transparent;
            --bs-btn-disabled-border-color: #dc3545;
            --bs-gradient: none;
        }`);
        styles.insertRule(`.dtz-spinner {
            display: inline-block;
            margin-top: -0.5em;
        }`);
        styles.insertRule(`.dtz-spinner,
          .dtz-spinner:after {
            box-sizing: border-box;
        }`);
        styles.insertRule(`.dtz-spinner {
            display: inline-block;
            width: 1em;
            height: 1em;
        }`);
        styles.insertRule(`.dtz-spinner.hide {
            display: none;
        }`);
        styles.insertRule(`.dtz-spinner:after {
            content: " ";
            display: block;
            width: 1em;
            height: 1em;
            margin: 0.25em;
            border-radius: 50%;
            border: 0.125em solid currentColor;
            border-color: currentColor transparent currentColor transparent;
            animation: dtz-spinner 1.2s linear infinite;
        }`);
        styles.insertRule(`@keyframes dtz-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
        }`);
        return styles;
    }
    click(event) {
        this.shadow.querySelector(".dtz-spinner").classList.remove("hide");
        this.shadow.querySelector("button").setAttribute("disabled", "");
        if (this.internals.form) {
            event.preventDefault();
            setTimeout(() => {
                this.internals.form.dispatchEvent(new SubmitEvent("submit", { submitter: this, bubbles: true, cancelable: true }));
            }, 0);
        }
    }
    processingDone() {
        this.shadow.querySelector(".dtz-spinner").classList.add("hide");
        this.shadow.querySelector("button").removeAttribute("disabled");
    }
    connectedCallback() {
        let shadow = this.shadow;
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<button><slot></slot><div class="dtz-spinner hide" role="status"></div></button>`;
        this.addEventListener("click", this.click.bind(this));
    }
}
window.customElements.define('dtz-button', DtzButton);
