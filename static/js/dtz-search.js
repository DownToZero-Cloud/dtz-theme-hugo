export class DtzSearch extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`.input-group {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            width: 100%;
        }`);
        styles.insertRule(`.input-group-text {
            display: flex;
            align-items: center;
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: var(--bs-body-color);
            text-align: center;
            white-space: nowrap;
            background-color: var(--bs-tertiary-bg);
            border: var(--bs-border-width) solid var(--bs-border-color);
            border-radius: var(--bs-border-radius);
        }`);
        styles.insertRule(`.bg-white {
            --bs-bg-opacity: 1;
            background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
        }`);
        styles.insertRule(`.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }`);
        styles.insertRule(`.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
            margin-left: calc(var(--bs-border-width)* -1);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }`);
        styles.insertRule(`.input-group .btn {
            position: relative;
            z-index: 2;
        }`);
        styles.insertRule(`#btnSearch {
            border-top-right-radius: 1em;
            border-bottom-right-radius: 1em;
            padding-left: 2em;
            padding-right: 2em;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }`);
        styles.insertRule(`.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
            margin-left: calc(var(--bs-border-width)* -1);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }`);
        styles.insertRule(`.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }`);
        styles.insertRule(`.input-group>.form-control, .input-group>.form-floating, .input-group>.form-select {
            position: relative;
            flex: 1 1 auto;
            width: 1%;
            min-width: 0;
        }`);
        styles.insertRule(`.form-control {
            display: block;
            width: 100%;
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: var(--bs-body-color);
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: var(--bs-body-bg);
            background-clip: padding-box;
            border: var(--bs-border-width) solid var(--bs-border-color);
            border-radius: var(--bs-border-radius);
            transition: border-color .15sease-in-out, box-shadow .15sease-in-out;
        }`);
        styles.insertRule(`button, input, optgroup, select, textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }`);
        styles.insertRule(`*, ::after, ::before {
            box-sizing: border-box;
        }`);
        styles.insertRule(`.btn-outline-secondary {
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
        styles.insertRule(`.btn {
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
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
            border-radius: var(--bs-btn-border-radius);
            background-color: var(--bs-btn-bg);
            transition: color .15sease-in-out, background-color .15sease-in-out, border-color .15sease-in-out, box-shadow .15sease-in-out;
        }`);
        styles.insertRule(`.btn:hover {
            color: var(--bs-btn-hover-color);
            background-color: var(--bs-btn-hover-bg);
            border-color: var(--bs-btn-hover-border-color);
        }`);
        styles.insertRule(`.btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
            color: var(--bs-btn-active-color);
            background-color: var(--bs-btn-active-bg);
            border-color: var(--bs-btn-active-border-color);
        }`);
        styles.insertRule(`.input-group>.form-control:focus, .input-group>.form-floating:focus-within, .input-group>.form-select:focus {
            z-index: 5;
        }`);
        styles.insertRule(`.btn.disabled, .btn:disabled, fieldset:disabled .btn {
            color: var(--bs-btn-disabled-color);
            pointer-events: none;
            background-color: var(--bs-btn-disabled-bg);
            border-color: var(--bs-btn-disabled-border-color);
            opacity: var(--bs-btn-disabled-opacity);
        }`);
        return styles;
    }
    search(e) {
        e.preventDefault();
        this.shadow.querySelector("#btnSearch").innerText = "Searching...";
        this.shadow.querySelector("#btnSearch").disabled = true;
        this.dispatchEvent(new CustomEvent('search', { detail: e.target.search.value }));
    }
    processingDone() {
        this.shadow.querySelector("#btnSearch").innerText = "Go!";
        this.shadow.querySelector("#btnSearch").disabled = false;
    }
    connectedCallback() {
        let shadow = this.shadow;
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<form id="searchForm">
    <div class="input-group">
      <span class="input-group-text bg-white" style="border-top-left-radius:1em;border-bottom-left-radius:1em;">🔎</span>
      <input id="search" type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button id="btnSearch" type="submit" class="btn btn-outline-secondary">Go!</button>
      </span>
    </div>
  </form>`;
        shadow.querySelector("#searchForm").addEventListener('submit', this.search.bind(this));
    }
}
window.customElements.define('dtz-search', DtzSearch);
