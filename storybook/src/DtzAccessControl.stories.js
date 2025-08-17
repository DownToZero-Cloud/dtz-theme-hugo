import { DtzAccessControl } from '../../static/js/dtz-access-control.js';

export default {
    component: 'dtz-access-control',
    render: (args) => `<dtz-access-control>${args.slot}</dtz-access-control>`,
};

export const Default = {
    args: {
        slot: 'Members',
    },
};
