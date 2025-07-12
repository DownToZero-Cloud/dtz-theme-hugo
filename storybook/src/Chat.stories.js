import { DtzChatInput } from '../../static/js/dtz-chat-input.js';
import { DtzChatBubble } from '../../static/js/dtz-chat-bubble.js';
import {  } from '../../static/marked/15/marked.min.js';

export default {
    component: 'dtz-chat-input',
    argTypes: {
    },
    args: {
    },
    render: (args) => `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
    <dtz-chat-bubble class="user" style="margin-top: 1em;">
        ${args.requestContent}
    </dtz-chat-bubble>
    <dtz-chat-bubble class="assistant" style="margin-top: 1em;">
        ${args.responseContent}
    </dtz-chat-bubble>
    <dtz-chat-input style="margin-top: 1em;"></dtz-chat-input>`,
};

export const Default = {
    args: {
        requestContent: 'Hello, how are you?',
        responseContent: 'I\'m fine, thank you!',
    },
};



export const Markdown = {
    args: {
        requestContent: 'Hello, how are you?',
        responseContent: marked.parse('# answering options\n\n- option 1\n- option 2\n- option 3'),
    },
};
