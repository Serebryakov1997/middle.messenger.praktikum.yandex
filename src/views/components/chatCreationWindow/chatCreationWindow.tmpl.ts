export const chatCreationWindowTmpl = `
    <form class="{{styles.chatCreationWindowClass}}" id="{{chatCreationWindowId}}">
        <a class="{{styles.chatCreationTextClass}}">{{chatCreationText}}</a>
        {{{closeButton}}}
        {{{chatCreationLabel}}}
        {{{chatCreationInput}}}
        {{{validErrorChatName}}}
        {{{chatCreationButton}}}
    </form>
`;
