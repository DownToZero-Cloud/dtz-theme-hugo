export class DtzPassword extends HTMLElement {
    static formAssociated = true;
    constructor() {
        super();
        this.internals = this.attachInternals();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    _value = '';
    valueVisible = false;
    eye = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
    </svg>`
    eye_slash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
    </svg>`;
    styles() {
        const styles = new CSSStyleSheet();
        styles.insertRule(`.input-group {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            width: 100%;
        }`);
        styles.insertRule(`.input-group>.form-control {
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
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }`);
        styles.insertRule(`button, input, optgroup, select, textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
        }`);
        styles.insertRule(`.input-group .btn {
            position: relative;
            z-index: 2;
        }`);
        styles.insertRule(`.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
            margin-left: calc(-1 * var(--bs-border-width));
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }`);
        styles.insertRule(`[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
            cursor: pointer;
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
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }`);
        styles.insertRule(`:host(.visible) svg.bi-eye-slash{
            display: block;
        }`);
        styles.insertRule(`:host(.visible) svg.bi-eye{
            display: none;
        }`);
        styles.insertRule(`svg.bi-eye-slash{
            display: none;
        }`);
        styles.insertRule(`svg.bi-eye{
            display: block;
        }`);
        styles.insertRule(`input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }`);
        styles.insertRule(`.input-group>.form-control:focus, .input-group>.form-floating:focus-within, .input-group>.form-select:focus {
            z-index: 5;
        }`);
        styles.insertRule(`.form-control:focus {
            color: var(--bs-body-color);
            background-color: var(--bs-body-bg);
            border-color: #86b7fe;
            outline: 0;
            box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
        }`);
        return styles;
    }
    get value() {
        const input = this.shadow?.querySelector("input");
        return input ? input.value : (this._value ?? '');
    }
    set value(val) {
        const newValue = val ?? '';
        this._value = newValue;
        const input = this.shadow?.querySelector("input");
        if (input) {
            input.value = newValue;
        }
        if (this.internals?.setFormValue) {
            this.internals.setFormValue(newValue);
        }
    }
    toggleValueVisible(event) {
        event.preventDefault();
        this.valueVisible = !this.valueVisible;
        if (this.valueVisible) {
            this.shadow.querySelector("input").type = "text";
            this.classList.add("visible")
        } else {
            this.shadow.querySelector("input").type = "password";
            this.classList.remove("visible")
        }
    }
    connectedCallback() {
        let shadow = this.shadow;
        shadow.adoptedStyleSheets = [this.styles()];
        shadow.innerHTML = `<div class="input-group mb-3">
  <input type="password" class="form-control" placeholder="password" aria-label="password">
  <button class="btn btn-outline-secondary" type="button" id="password-toggle">${this.eye_slash}${this.eye}</button>
</div>`;
        const input = shadow.querySelector("input");
        // initialize value from attribute or previously set property
        if (this.hasAttribute('value')) {
            input.value = this.getAttribute('value');
        } else if (this._value) {
            input.value = this._value;
        }
        // keep element.value in sync with internal input
        input.addEventListener('input', (e) => {
            this._value = e.target.value;
            if (this.internals?.setFormValue) {
                this.internals.setFormValue(this._value);
            }
            this.dispatchEvent(new Event('input', { bubbles: true }));
        });
        if (this.internals?.setFormValue) {
            this.internals.setFormValue(input.value ?? '');
        }
        shadow.getElementById("password-toggle").addEventListener("click", this.toggleValueVisible.bind(this));
    }
}
window.customElements.define('dtz-password', DtzPassword);
