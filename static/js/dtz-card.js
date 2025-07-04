export class DtzCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
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
        styles.insertRule(`:host {
            display: block;
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
            display: grid;
        }`);
        styles.insertRule(`.dtz-heading.loading {
            background-color: var(--bs-secondary-bg-subtle);
        }`);
        styles.insertRule(`.actions {
            margin: 1em;
        }`);
        styles.insertRule(`:host(.warning) {
            --dtz-light: hsl(45 100% 85% / 1);
            --dtz-normal: hsl(45 100% 55% / 1);
        }`);
        styles.insertRule(`:host(.compact) .actions {
            display: flex;
            margin: 0.5em;
        }`);
        styles.insertRule(`:host(.compact.actions-end) .actions {
            justify-content: flex-end;
        }`);
        styles.insertRule(`:host(.compact.actions-space-between) .actions {
            justify-content: space-between;
        }`);
        styles.insertRule(`:host(.compact) .dtz-card {
            border-radius: 1.5rem;
        }`);
        styles.insertRule(`.dtz-card {
            border: 2px solid var(--dtz-normal);
            border-radius: 2rem;
            overflow: hidden;
            transition: border-color 4s;
        }`);
        styles.insertRule(`.dtz-card:has(h5.loading) {
            border-color: var(--bs-secondary-bg-subtle);
        }`);
        styles.insertRule(`.dtz-spinner {
            color: var(--dtz-normal);
            justify-self: center;
            margin-bottom: 0.5em;
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
        styles.insertRule(`.expand-container {
            display: flex;
            justify-content: center;
            padding-bottom: 0.5em;
        }`);
        styles.insertRule(`.expand-container[hidden] {
            display: none;
        }`);
        styles.insertRule(`.expand-button {
            background: none;
            border: 1px solid var(--dtz-normal);
            color: var(--dtz-normal);
            border-radius: 50%;
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease-in-out, border-color 4s;
        }`);
        styles.insertRule(`.expand-button:hover {
            transform: scale(1.1);
        }`);
        styles.insertRule(`:host(.compact) .expand-button {
            width: 1.5rem;
            height: 1.5rem;
        }`);
        styles.insertRule(`:host(.compact) .expand-button svg {
            width: 0.75rem;
            height: 0.75rem;
        }`);
        styles.insertRule(`.expand-button svg {
            transition: transform 0.3s ease;
        }`);
        styles.insertRule(`.collapsible-content {
            margin: 0 1em 1em 1em;
            display: grid;
        }`);
        styles.insertRule(`.collapsible-content[hidden] {
            display: none;
        }`);
        return styles;
    }
    static get observedAttributes() {
        return ['title'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            let h5 = this.shadow.querySelector("h5");
            if (h5) {
                h5.textContent = newValue;
            }
        }
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [this.styles()];
        let title = this.getAttribute('title');
        let title_str = title ? `<h5 class="dtz-heading loading">${title}</h5>` : '';
        this.shadow.innerHTML = `<div class="dtz-card">
            ${title_str}
            <div class="content">
                <div class="dtz-spinner" role="status"></div>
                <slot name="content-slot1"></slot>
            </div>
            <div class="expand-container" hidden>
                <button class="expand-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
            <div class="collapsible-content" hidden>
                <slot name="content-slot2"></slot>
            </div>
            <div class="actions">
                <slot name="actions"></slot>
            </div>
        </div>`;

        const contentSlot1 = this.shadow.querySelector("slot[name='content-slot1']");
        const contentSlot2 = this.shadow.querySelector("slot[name='content-slot2']");
        const expandButton = this.shadow.querySelector('.expand-button');
        const collapsibleContent = this.shadow.querySelector('.collapsible-content');
        const expandContainer = this.shadow.querySelector('.expand-container');

        contentSlot1.addEventListener("slotchange", () => {
            this.shadow.querySelector("h5")?.classList.remove("loading");
            this.shadow.querySelector(".dtz-spinner")?.classList.add("hide");
        });

        const observer = new MutationObserver(() => {
            const hasContent = contentSlot2.assignedNodes().some(node =>
                node.nodeType === Node.ELEMENT_NODE ||
                (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')
            );
            expandContainer.hidden = !hasContent;
        });

        observer.observe(this, { childList: true, subtree: true });

        expandButton.addEventListener('click', () => {
            collapsibleContent.hidden = !collapsibleContent.hidden;
            const icon = expandButton.querySelector('svg');
            icon.style.transform = collapsibleContent.hidden ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        console.log("has content "+contentSlot2.assignedNodes().length);
        if (contentSlot2.assignedNodes().length > 0) {
            expandContainer.removeAttribute("hidden");
        }

    }
}
window.customElements.define('dtz-card', DtzCard);
