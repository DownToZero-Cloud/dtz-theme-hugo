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

export const Shortened = {
    args: {
        alias: 'test2 context',
        contextId: 'context-6a488287-2e0d-43a1-a92c-54546ad5b1fb',
    },
};