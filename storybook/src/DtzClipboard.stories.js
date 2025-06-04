import { DtzClipboard } from '../../static/js/dtz-clipboard.js';

export default {
    component: 'dtz-clipboard',
    render: (args) => `
        <dtz-clipboard>1234567890</dtz-clipboard>
    `,
};

export const Default = {
    args: {
        target: 'key',
    },
};