import { DtzCard } from '../../static/js/dtz-card.js';

export default {
    component: 'dtz-card',
    render: (args) => `
        <dtz-card class="${args.class || ''}" title="${args.title || ''}">
            ${args.content}
            ${args.actions ? `${args.actions}` : ''}
        </dtz-card>
    `,
};

export const Default = {
    args: {
        title: 'Card Title',
        content: 'This is the card content.',
    },
};


export const CompactCard = {
    args: {
        title: 'Card Title',
        content: 'This is the card content.',
        class: 'compact',
    },
};

export const WithActions = {
    args: {
        title: 'Card with Actions',
        content: 'This card has action buttons.',
        actions: '<dtz-button slot="actions">Action 1</dtz-button> <dtz-button slot="actions" class="secondary">Action 2</dtz-button>',
    },
};
