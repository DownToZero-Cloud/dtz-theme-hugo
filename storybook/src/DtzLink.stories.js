import { DtzLink } from '../../static/js/dtz-link.js';

export default {
    component: 'dtz-link',
    render: (args) => `<dtz-link href="https://www.google.com">${args.label}</dtz-link>`,
};

export const Default = {
    args: {
        label: 'Default Link',
    },
};

export const Secondary = {
    args: {
        label: 'Secondary Link',
    },
    render: (args) => `<dtz-link class="secondary" href="https://www.google.com">${args.label}</dtz-link>`,
};

export const Danger = {
    args: {
        label: 'Danger Link',
    },
    render: (args) => `<dtz-link class="danger" href="https://www.google.com">${args.label}</dtz-link>`,
};
