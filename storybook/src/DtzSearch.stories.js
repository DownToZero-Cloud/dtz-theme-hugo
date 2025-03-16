import { DtzSearch } from '../../static/js/dtz-search.js';

export default {
    component: 'dtz-search',
    render: (args) => `<dtz-search></dtz-search>`,
};

export const Default = {
    args: {},
    play: async ({ canvasElement }) => {
        // You can add interactions here using the play function
        const search = canvasElement.querySelector('dtz-search');
        search.addEventListener('search', (e) => {
            console.log('Search event:', e.detail);
        });
    },
};

export const WithPlaceholder = {
    render: () => `<dtz-search>
        <input slot="input" type="text" class="form-control" placeholder="Custom placeholder...">
    </dtz-search>`,
}; 