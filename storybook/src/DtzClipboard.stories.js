import { DtzClipboard } from '../../static/js/dtz-clipboard.js';

export default {
    component: 'dtz-clipboard',
    render: (args) => `
        <dtz-clipboard ${args.class ? `class="${args.class}"` : ''}>1234567890</dtz-clipboard>
    `,
};

export const Default = {
    args: {
    },
};

export const Compact = {
    args: {
        class: 'compact',
    },
};

export const MinimalDeprecated = {
    args: {
        class: 'minimal',
    },
};