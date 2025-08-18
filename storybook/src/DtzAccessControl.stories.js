import { DtzAccessControl } from '../../static/js/dtz-access-control.js';

export default {
    component: 'dtz-access-control',
    render: (args) => `<dtz-access-control>
       ${args.slot}
       ${args.slots ? `${args.slots}` : ''}
    </dtz-access-control>`,
};

export const Default = {
    args: {
        slot: 'Members',
        slots: `<div slot="red">No Access</div>
                <div slot="green">Chat</div>`,
    },
};

export const Null = {
    args: {
        slot: '&lt;NULL&gt;',
        slots: `<div slot="red">No Access</div>
                <div slot="yellow">Chat</div>
                <div slot="green">Resources</div>`,
    },
};

export const Support = {
    args: {
        slot: 'Support',
        slots: `<div slot="red">No Access</div>
                <div slot="green">Chat</div>`,
    },
};
