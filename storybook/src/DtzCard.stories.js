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
        content: '<div>This is the card content.</div>',
    },
};

export const WithCollapsibleContent = {
    args: {
        title: 'Card with Collapsible Content',
        content: `
            <div>This is the always visible content.</div>
            <div slot="content-expanded">This is the collapsible content that is initially hidden.</div>
        `,
    },
};

export const CompactCard = {
    args: {
        title: 'Card Title',
        content: '<div>This is the card content.</div>',
        class: 'compact',
    },
};

export const CompactWithCollapsibleContent = {
    args: {
        title: 'Compact Card with Collapsible Content',
        content: `
            <div>This is the always visible content.</div>
            <div slot="content-expanded">This is the collapsible content that is initially hidden.</div>
        `,
        class: 'compact',
    },
};

export const CompactWithActionsEnd = {
    args: {
        title: 'Card with Actions at the End',
        content: '<div>This card has action buttons.</div>',
        class: 'compact actions-end',
        actions: '<dtz-button slot="actions">Action 1</dtz-button> <dtz-button slot="actions" class="secondary">Action 2</dtz-button>',
    },
};

export const CompactWithActionsSpaceBetween = {
    args: {
        title: 'Card with Actions at the End',
        content: '<div>This card has action buttons.</div>',
        class: 'compact actions-space-between',
        actions: '<dtz-button slot="actions">Action 1</dtz-button> <dtz-button slot="actions" class="secondary">Action 2</dtz-button>',
    },
};

export const WithActions = {
    args: {
        title: 'Card with Actions',
        content: '<div>This card has action buttons.</div>',
        actions: '<dtz-button slot="actions">Action 1</dtz-button> <dtz-button slot="actions" class="secondary">Action 2</dtz-button>',
    },
};

export const WithActionsFullLine = {
    args: {
        title: 'Card with Actions',
        content: '<div>This card has action buttons.</div>',
        actions: '<dtz-button slot="actions" style="display: block;">Action 1</dtz-button>',
    },
};

export const Warning = {
    args: {
        title: 'Warning Card',
        content: '<div>This card has action buttons.</div>',
        class: 'warning',
    },
};

export const Disabled = {
    args: {
        title: 'Disabled Card',
        content: '<div>This card has action buttons.</div>',
        class: 'disabled',
    },
};