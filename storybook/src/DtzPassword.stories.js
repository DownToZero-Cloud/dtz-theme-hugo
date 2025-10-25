import { DtzPassword } from '../../static/js/dtz-password.js';

export default {
    component: 'dtz-password',
    render: (args) => {
        const container = document.createElement('div');
        const pwd = document.createElement('dtz-password');
        const btn = document.createElement('button');
        btn.textContent = 'submit';
        btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            if (typeof args.onSubmit === 'function') {
                args.onSubmit(evt);
            }
        });
        container.appendChild(pwd);
        container.appendChild(btn);
        return container;
    },
};

export const Default = {
    args: {
        onSubmit: () => {
            let pwd = document.querySelector('dtz-password').value;
            alert('your password is '+ pwd);
        },
    },
};

