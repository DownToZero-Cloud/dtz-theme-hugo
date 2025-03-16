import { DtzCard } from '../../static/js/dtz-card.js';

export default {
    component: 'dtz-card',
    render: (args) => `
        <dtz-card class="${args.class || ''}">
            <h5 class="dtz-heading ${args.loading ? 'loading' : ''}">${args.heading}</h5>
            <div class="content">
                ${args.content}
            </div>
            ${args.actions ? `
            <div class="actions">
                ${args.actions}
            </div>
            ` : ''}
        </dtz-card>
    `,
};

export const Default = {
    args: {
        heading: 'Card Title',
        content: 'This is the card content.',
    },
};

export const WithActions = {
    args: {
        heading: 'Card with Actions',
        content: 'This card has action buttons.',
        actions: '<dtz-button>Action 1</dtz-button> <dtz-button class="secondary">Action 2</dtz-button>',
    },
};

export const Compact = {
    args: {
        class: 'compact',
        heading: 'Compact Card',
        content: 'This is a compact card with less padding.',
    },
};

export const CompactWithActions = {
    args: {
        class: 'compact actions-end',
        heading: 'Compact with Actions',
        content: 'This card has right-aligned actions.',
        actions: '<dtz-button>Action</dtz-button>',
    },
};

export const Loading = {
    args: {
        heading: 'Loading Card',
        content: '<div class="dtz-spinner"></div>',
        loading: true,
    },
}; 