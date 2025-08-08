export class DtzChatBubble extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`.chat-entry {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 0.5em;
        }`);
        styles.insertRule(`.chat-bubble {
            border: 1px solid black;
            border-radius: 2em;
            padding: 1em;
            display: inline-flex;
            flex-direction: column;
            height: fit-content;
        }`);
        styles.insertRule(`svg {
            margin-top: -0.5em;
        }`);
        styles.insertRule(`:host(.user) svg.bi-person {
            display: flex;
        }`);
        styles.insertRule(`:host(.user) svg.bi-robot {
            display: none;
        }`);
        styles.insertRule(`:host(.user) div.chat-bubble {
            border-top-right-radius: 0;
            background-color: var(--bs-success-bg-subtle);
        }`);
        styles.insertRule(`:host(.assistant) svg.bi-person {
            display: none;
        }`);
        styles.insertRule(`:host(.assistant) svg.bi-robot {
            display: flex;
        }`);
        styles.insertRule(`:host(.assistant) div.chat-bubble {
            border-top-left-radius: 0;
            background-color: var(--bs-primary-bg-subtle);
        }`);
        styles.insertRule(`:host {
            display: flex;
        }`);
        styles.insertRule(`:host(.user) {
            justify-content: end;
        }`);
        return styles;
    }
    connectedCallback() {
        let shadow = this.shadow;
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<div class="chat-entry">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16" style="flex-shrink: 0;">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
          </svg>
          <div class="chat-bubble">
            <slot></slot>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" style="flex-shrink: 0;">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
        </div>`;
    }
}
window.customElements.define('dtz-chat-bubble', DtzChatBubble);
