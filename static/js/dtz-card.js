class DtzCard extends HTMLElement {
    constructor() {
        super();
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
            transition: background-color 4s;
        }`);
        styles.insertRule(`:host(.compact) .dtz-heading {
            font-size: 1rem;
            padding-top: 0.25em;
            padding-bottom: 0.25em;
        }`);
        styles.insertRule(`:host(.compact) .content {
            margin: 0.5em;
        }`);
        styles.insertRule(`.content {
            margin: 1em;
        }`);
        styles.insertRule(`.dtz-heading.loading {
            background-color: var(--bs-secondary-bg-subtle);
        }`);
        styles.insertRule(`.actions {
            margin: 1em;
        }`);
        styles.insertRule(`:host(.compact) .actions {
            display: flex;
            margin: 1em;
        }`);
        styles.insertRule(`:host(.compact.actions-end) .actions {
            justify-content: flex-end;
        }`);
        styles.insertRule(`:host(.compact.actions-space-between) .actions {
            justify-content: space-between;
        }`);
        styles.insertRule(`:host(.compact) .dtz-card {
            border-radius: 1.5em;
        }`);
        styles.insertRule(`.dtz-card {
            margin: 1em;
            min-width: 27em;
            border-radius: 2em;
            border: 2px solid var(--dtz-normal);
            overflow: hidden;
            transition: border-color 4s;
        }`);
        styles.insertRule(`.dtz-card:has(h5.loading) {
            border-color: var(--bs-secondary-bg-subtle);
        }`);
        styles.insertRule(`.dtz-spinner {
            color: var(--dtz-normal);
            display: block;
            justify-self: center;
        }`);
        styles.insertRule(`.dtz-spinner,
          .dtz-spinner:after {
            box-sizing: border-box;
        }`);
        styles.insertRule(`.dtz-spinner {
            display: inline-block;
            width: 48px;
            height: 48px;
        }`);
        styles.insertRule(`.dtz-spinner.hide {
            display: none;
        }`);
        styles.insertRule(`.dtz-spinner:after {
            content: " ";
            display: block;
            width: 48px;
            height: 48px;
            margin: 8px;
            border-radius: 50%;
            border: 6.4px solid currentColor;
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
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.adoptedStyleSheets = [this.styles()];
        let title = this.getAttribute('title');
        setTimeout(() => {
            let slot = shadow.querySelector("slot");
            console.log(slot.hasChildNodes);
        },0);
        let title_str = title ? `<h5 class="dtz-heading loading">${title}</h5>` : '';
        shadow.innerHTML = `<div class="dtz-card">
            ${title_str}
            <div class="content"><div class="dtz-spinner" role="status"></div>
            <slot></slot></div>
            <div class="actions">
                <slot name="actions"></slot>
            </div>
        </div>`;
        shadow.querySelector("slot").addEventListener("slotchange", (e) => {
            shadow.querySelector("h5").classList.remove("loading");
            shadow.querySelector(".dtz-spinner").classList.add("hide");
        });
    }
}
window.customElements.define('dtz-card', DtzCard);
