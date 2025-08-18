import { DtzContextLabel } from '../../static/js/dtz-context-label.js';
import { DtzClipboard } from '../../static/js/dtz-clipboard.js';

export default {
    component: 'dtz-context-label',
    render: (args) => `<dtz-context-label class="${args.class}" style="${args.style}" contextId="${args.contextId}" alias="${args.alias}"></dtz-context-label>`,
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

export const VeryLognAlias = {
    args: {
        style: 'width: 29rem;',
        alias: 'test-context-2025-08-16T12:25:21.420566Z - context-gdaakm2n',
        contextId: 'context-6a488287-2e0d-43a1-a92c-54546ad5b1fb',
    },
};

export const OnlyAlias = {
    args: {
        alias: 'test-context-2025',
        contextId: '',
    },
};

export const CompactAlias = {
    args: {
        alias: 'test-context-2025',
        class: 'compact',
        contextId: '',
    },
};

export const CompactFull = {
    args: {
        alias: 'test-context-2025',
        class: 'compact',
        contextId: 'context-6a488287',
    },
};