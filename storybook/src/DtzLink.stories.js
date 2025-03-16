import { DtzLink } from '../../static/js/dtz-link.js';

export default {
    component: 'dtz-link',
    render: (args) => `<dtz-link class="${args.class || ''}" href="#">${args.label}</dtz-link>`,
};

export const Default = {
    args: {
        label: 'Default Link',
    },
};

export const Secondary = {
    args: {
        label: 'Secondary Link',
        class: 'secondary',
    },
};

export const Danger = {
    args: {
        label: 'Danger Link',
        class: 'danger',
    },
};
