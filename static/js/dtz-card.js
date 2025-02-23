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
        styles.insertRule(`.dtz-spinner {
            /* change color here */
            color: #1c4c5b
        }`);
        styles.insertRule(`.dtz-spinner,
          .dtz-spinner:after {
            box-sizing: border-box;
        }`);
        styles.insertRule(`.dtz-spinner {
            display: inline-block;
            width: 80px;
            height: 80px;
        }`);
        styles.insertRule(`.dtz-spinner.hide {
            display: none;
        }`);
        styles.insertRule(`.dtz-spinner:after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
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
    slotChange(slot){
        this.querySelector("h5").classList.remove("loading");
        this.querySelector(".dtz-spinner").classList.add("hide");
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
            <div style="margin: 1em;"><div class="dtz-spinner" role="status">
  <span class="visually-hidden">Loading...</span>
</div><slot></slot></div>
        </div>`;
    }
}
window.customElements.define('dtz-card', DtzCard);
