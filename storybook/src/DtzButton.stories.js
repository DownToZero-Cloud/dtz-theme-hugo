import { DtzButton } from '../../static/js/dtz-button.js';

export default {
    component: 'dtz-button',
    argTypes: {
        class: {
            options: ['default', 'secondary', 'danger'],
            control: { type: 'select' },
        },
    },
    args: {
      disabled: false,
      loading: false,
    },
    render: (args) => `<dtz-button class="${args.class ? `${args.class}` : ''}" ${args.disabled ? 'disabled' : ''} ${args.loading ? 'loading' : ''}>${args.label}</dtz-button>`,
};

export const Default = {
    args: {
        label: 'Default Button',
    },
};

export const DefaultLoading = {
    args: {
        label: 'Default Button',
        loading: true,
    },
};

export const Secondary = {
    args: {
        label: 'Secondary Button',
        class: 'secondary',
    },
};

export const Danger = {
    args: {
        label: 'Danger Button',
        class: 'danger',
    },
};

export const Disabled = {
    args: {
        label: 'Disabled Button',
        disabled: true,
    },
}; 

export const FormControlButton = {
    args: {
        label: 'Add Domain'
    },
    render: (args) => `<div class="input-group mb-3 mt-3" style="width:20em;">
            <input type="text" class="form-control" placeholder="domain name" aria-label="domain name" id="inDomain" aria-describedby="button-addon2">
            <dtz-button id="button-addon2" style="margin-left: 1px;" class="${args.class ? `${args.class}` : ''}" ${args.disabled ? 'disabled' : ''}>${args.label}</dtz-button>
        </div>`,
}; 