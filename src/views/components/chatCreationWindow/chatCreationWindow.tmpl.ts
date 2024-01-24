export const chatCreationWindowTmpl = `
    <form class="{{styles.chatCreationWindowClass}}" id="{{chatCreationWindowId}}">
        <a class="{{styles.chatCreationTextClass}}">{{chatCreationText}}</a>
        {{{chatCreationLabel}}}
        {{{chatCreationInput}}}
        {{{validErrorChatName}}}
        {{{chatCreationButton}}}
    </form>
`;
