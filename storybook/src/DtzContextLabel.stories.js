import { DtzContextLabel } from '../../static/js/dtz-context-label.js';
import { DtzClipboard } from '../../static/js/dtz-clipboard.js';

export default {
    component: 'dtz-context-label',
    render: (args) => `<dtz-context-label contextId="${args.contextId}" alias="${args.alias}"></dtz-context-label>`,
};

export const Default = {
    args: {
        alias: 'infra',
        contextId: 'context-1234567890',
    },
};
